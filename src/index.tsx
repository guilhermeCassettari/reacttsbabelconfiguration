import * as React from 'react'
import * as ReactDom from 'react-dom'

const App = () => {
    return <div>Hello World</div>
}

ReactDom.render(
    <App />, document.getElementById('root')
)