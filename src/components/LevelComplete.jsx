import React, { Component } from 'react'

export default class LevelComplete extends Component {

    render() {
        return (
            <div className="level-complete-wrapper">
                <div className="level-complete-card">
                    <div className="level-complete-header">
                        Level Complete
                    </div>

                    <div className="level-complete-body">
                        <div className="WPM-circle">
                            {this.props.WPM} WPM
                        </div>
                    </div>

                    <div className="level-complete-footer">
                        <div
                            className="bubble back-button btn"
                            tabIndex={1}
                            onClick={this.props.handleBack}
                            onKeyDown={(e) => {
                                if(e.key == "Enter"){
                                    this.props.handleBack();
                                }
                            }}
                        > ← Back</div>

                        <div
                            className="bubble btn next-button"
                            tabIndex={0}
                            onClick={this.props.handleNext}
                            onKeyDown={(e) => {
                                if (e.key == "Enter") {
                                    this.props.handleNext();
                                }
                            }}
                        >Next</div>

                    </div>

                </div>
            </div>
        )
    }
}
