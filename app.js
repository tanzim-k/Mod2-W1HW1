class App extends React.Component {
    render() {
        return (
            <div id='container'>
                <div id='sidebar'>
                    <div id='sidebartext'>
                        Dashboard <br></br>
                        Widget <br></br>
                        Reviews <br></br>
                        Customers <br></br>
                        Online Analysis <br></br>
                        Settings
                    </div>
                </div>
                <div id='reviews'>
                    Reviews <br></br>
                    <p id='numCount'>1,281</p>
                </div>
                <div id='rating'>
                    Average Rating <br></br>
                    <p id='numCount'>4.6</p>
                </div>
                <div id='analysis'>
                    Sentiment Analysis
                    <p id='sentAnalysis'>
                        960 <br></br>
                        122 <br></br>
                        321 <br></br>
                    </p>
                </div>
                <div id='visitors'>
                    Website Visitors
                    <p id='numCount'>821</p>
                    <div id='visitorGraph'></div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <App />, document.getElementById('main')
)