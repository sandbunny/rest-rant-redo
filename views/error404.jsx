const React = require('react')
const Def = require('./default')

function error404 () {
    return (
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>Oops, sorry, we can't find this page!</p>
                <div>
                    <img src="/images/sad-robot.jpg" alt="Sad Robot" />
                    <div>
                    Photo by <a href="https://unsplash.com/@mullyadii?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Mulyadi</a> on <a href="https://unsplash.com/photos/grayscale-photo-of-box-robot-on-table-ZnLprInKM7s?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
                    </div>
                </div>
            </main>
        </Def>
    )
 }


module.exports = error404