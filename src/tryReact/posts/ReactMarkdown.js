import React, {Component} from 'react'
import ReactMarkdown from 'react-markdown'
// import {render} from 'react-dom'

// render(<ReactMarkdown># Hello, *world*!</ReactMarkdown>, document.body)
// const React = require('react')
// const ReactMarkdown = require('react-markdown')
// const render = require('react-dom').render
// const gfm = require('remark-gfm')

class ReactMarkdownExample extends Component {
    render() {
        const markdown = this.props.markdown
        // const disallowed = [
        //     'p'
        // ]

        return (
            // <ReactMarkdown># Hello, *world*!</ReactMarkdown>
            <ReactMarkdown children={markdown} />
        )
    }
}

export default ReactMarkdownExample





// render(<ReactMarkdown remarkPlugins={[gfm]} children={markdown} />, document.body)