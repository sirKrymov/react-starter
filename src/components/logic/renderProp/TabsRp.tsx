import React, {
  FunctionComponent,
  Component,
  ReactNode,
  createRef,
  ReactElement
} from 'react';

import scrollIntoView from 'smooth-scroll-into-view-if-needed';

import {
  IProps as ILoaderProps,
  Loader
} from 'components/view/atoms/loaders/Loader';

import { ITabsHeader } from 'types/components.interface';

interface ITab {
  onUnmount?(): void;
  onUpdate?(): void;
  onMount?(): void;
  disabled?: boolean;
  subLabel?: string;
  children: FunctionComponent;
  props?: Record<string, any>;
  icon?: ReactNode | string;
  label: string;
  name: string;
  key?: string;
}

interface Props {
  withoutScrollToTop?: boolean;
  loaderColor?: ILoaderProps['color'];
  loaderHeight?: string;
  loading?: boolean;
  active?: string;
  header: FunctionComponent<ITabsHeader>;
  steps?: boolean;
  tabs: ITab[];
}

interface State {
  active: string;
}

export class TabsRp extends Component<Props, State> {
  static defaultProps = {
    loaderHeight: '200px',
    loaderColor: 'secondary'
  };

  private activeTabRef: React.RefObject<HTMLDivElement> = createRef<
    HTMLDivElement
  >();

  static getDerivedStateFromProps(
    props: Props,
    state: State
  ): Record<string, any> | null {
    if (props.active && props.active !== state.active) {
      return { active: props.active };
    }

    return null;
  }

  constructor(props: Props) {
    super(props);

    const { active, tabs } = props;
    let activeTabName: string;

    if (active) {
      activeTabName = active;
    } else {
      activeTabName = tabs[0].name;
    }

    this.state = { active: activeTabName };
  }

  componentDidMount(): void {
    this.tabMount(this.props.tabs, this.state.active);

    setTimeout(() => this.scrollToTab(), 1400);
  }

  componentDidUpdate(_prevProps: Props, prevState: State): void {
    if (this.state.active !== prevState.active) {
      this.tabMount(this.props.tabs, this.state.active);
      this.scrollToTab();

      if (!this.props.withoutScrollToTop) window.scrollTo(0, 0);

      this.tabUnmount(this.props.tabs, prevState.active);
    }
  }

  componentWillUnmount(): void {
    this.tabUnmount(this.props.tabs, this.state.active);
  }

  tabMount(tabs: ITab[], active: string): void {
    const tab = tabs.find(tab => tab.name === active);

    tab && tab.onMount && tab.onMount();
  }

  tabUnmount(tabs: ITab[], active: string): void {
    const tab = tabs.find(tab => tab.name === active);

    tab && tab.onUnmount && tab.onUnmount();
  }

  changeActiveTab(name: string): void {
    if (name !== this.state.active) {
      this.setState({ active: name });
    }
  }

  getDataForHeader(tabs: ITab[], steps?: boolean): Array<any> {
    return tabs.map(tab => ({
      disabled: tab.disabled || false,
      subLabel: tab.subLabel,
      onClick: steps ? null : (): void => this.changeActiveTab(tab.name),
      label: tab.label,
      name: tab.name,
      icon: tab.icon,
      key: tab.key
    }));
  }

  scrollToTab(): void {
    const tab = this.activeTabRef.current;

    if (tab) {
      const innerWidth = window.innerWidth;
      const tabParent = tab.parentElement;

      if (tabParent && tabParent.offsetWidth > innerWidth) {
        scrollIntoView(tab, {
          behavior: 'smooth',
          boundary: tabParent.parentElement,
          duration: 240,
          inline: 'center'
        });
      }
    }
  }

  render(): ReactElement | null {
    const {
      loaderHeight,
      loaderColor,
      loading,
      header: Header,
      tabs,
      steps
    } = this.props;
    const { active } = this.state;

    const activeTabContent = tabs.find(tab => tab.name === active);

    return activeTabContent ? (
      <>
        <Header
          activeRef={this.activeTabRef}
          active={active}
          steps={steps}
          tabs={this.getDataForHeader(tabs, steps)}
        />

        {loading ? (
          <div style={{ height: loaderHeight, display: 'flex' }}>
            <Loader color={loaderColor} size="md" />
          </div>
        ) : (
          <activeTabContent.children {...activeTabContent.props} />
        )}
      </>
    ) : null;
  }
}
