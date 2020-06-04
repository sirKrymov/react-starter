// @SETUP: Please don't forget to remove this component or current comment if component is used in project
// @TODO: Add component tests
import React, { Component, ReactElement } from 'react';

import { EditorState, convertToRaw, ContentState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import { Editor } from 'react-draft-wysiwyg';
import cn from 'classnames';

import './styles.scss';

interface IProps {
  defaultValue?: string;
  onBlur?(html: string): void;
  placeholder?: string;
  readOnly?: boolean;
  error?: boolean;
  id: string;
}

interface IState {
  editorState: EditorState;
}

export class Wysiwyg extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    if (props.defaultValue) {
      const blocksFromHtml = htmlToDraft(props.defaultValue);
      const { contentBlocks, entityMap } = blocksFromHtml;
      const contentState = ContentState.createFromBlockArray(
        contentBlocks,
        entityMap
      );
      const editorState = EditorState.createWithContent(contentState);

      this.state = {
        editorState
      };
    } else {
      this.state = {
        editorState: EditorState.createEmpty()
      };
    }

    this.handleStateChange = this.handleStateChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleStateChange(editorState: IState['editorState']): void {
    this.setState({
      editorState
    });
  }

  getHTML(): string {
    const raw = convertToRaw(this.state.editorState.getCurrentContent());

    if (!raw.blocks[0].text) return '';

    return draftToHtml(raw);
  }

  handleBlur(): void {
    const { onBlur } = this.props;

    if (onBlur) {
      onBlur(this.getHTML());
    }
  }

  render(): ReactElement {
    const { placeholder, readOnly, error, id } = this.props;

    const wysiwygClass = cn({
      wysiwyg: true,
      'wysiwyg--read-only': readOnly,
      'wysiwyg--error': error
    });

    return (
      <div className={wysiwygClass} id={id}>
        <Editor
          onEditorStateChange={this.handleStateChange}
          toolbarClassName="wysiwyg__toolbar"
          editorClassName="wysiwyg__field"
          editorState={this.state.editorState}
          placeholder={placeholder}
          readOnly={readOnly}
          toolbar={{
            options: ['inline', 'list', 'history'],
            inline: {
              inDropdown: false,
              options: ['bold', 'italic', 'underline', 'strikethrough']
            },
            list: { inDropdown: false, options: ['unordered', 'ordered'] }
          }}
          onBlur={this.handleBlur}
        />
      </div>
    );
  }
}
