const React = require('react')
const Def = require('../default')
function show(data) {
    const {name, pic, city, state, cuisines} = data.place;
    return(
        <Def>
            <main className="container">
                <div className='row mt-5'>
                    <div className='col-lg-6'>
                        <img src={pic} alt="missing picture" className='img-fluid w-100 h-auto' />
                    </div>
                    <div className='col-lg-6'>
                        <h1 className='mt-5'>{ name }</h1>
                        <div>
                            <h2>Rating</h2>
                            <p>Not rated</p>
                        </div>
                        <div>
                            <h2>Description</h2>
                            <p>Location: {city}, {state} and Serving {cuisines}</p>
                        </div>
                        <div>
                            <a href= {`/places/${data.id}/edit`} className='btn btn-warning'>
                                Edit
                            </a>
                            <form method="POST" action= {`/places/${data.id}?_method=DELETE`}>
                                <button type="submit" className='btn btn-danger'>
                                    Delete
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className='mt-4'>
                    <h2>Comments</h2>
                    <p>No comments yet!</p>
                </div>    
            </main>
        </Def>
    )
}
module.exports = show