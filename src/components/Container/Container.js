/*====   import Sctipt    ====*/
    import React from 'react';
/*====   import Sctipt    ====*/
export default class Container extends React.Component
{
    constructor()
    {
        super();
        this.state = {classList : ''};
    }
    static getDerivedStateFromProps(props)
    {
        return {classList : ((props.hasOwnProperty('className')) ? props.className : '')};
    }
    render()
    {
        let result = 
        (
            <React.Fragment>
                <section className={'container margCenter '+this.state.classList}>
                    {
                        this.props.children
                    }
                </section>
            </React.Fragment>
        );
        return result;
    }
}