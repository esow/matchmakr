import React, { Component } from 'react';
import { Button, Modal, Icon } from 'semantic-ui-react'

export default class MatchResponseModal extends Component {

    render () {
        const player = this.props.player
        let responseHeader;
        let icon;
        let message;
        
        switch (this.props.response) {
            case "accept":
                responseHeader = "Congratulations!";
                icon = <Icon size="huge" color="green" name="check circle outline" />
                message = (
                    <div>
                        <h4> 
                            You have succesfully matched with {this.props.player.name}!
                        </h4>
                        <h4> 
                            Add eachother in the League of Legends client and fight together on the Rift! 
                        </h4>
                    </div>
                )
                break;

            case "reject":
                responseHeader = "I don't know how to tell you this, but...";
                icon = <Icon size="huge" color="red" name="remove circle outline"/>
                message = (
                    <div>
                        <h4> 
                            {this.props.player.name} has denied your request. :(
                        </h4>
                        <h4> 
                            Click close to return to your list of matches.
                        </h4>
                    </div>
                )
                break;

            case "cancel":
                responseHeader = "Ooops...";
                icon = <Icon size="huge" color="red" name="remove circle outline"/>
                message = (
                    <div>
                    <h4> 
                        {this.props.player.name} has canceled his request!
                    </h4>
                    <h4> 
                        Click close to return to your list of matches.
                    </h4>
                </div>
                )
                break;

            default:
                break;
        }
        
        return (
          <div>
            {player && 

              <Modal size="small" dimmer={"blurring"} className="modal" open={this.props.open} onClose={this.props.handleClose}>
              
                <Modal.Header> <h2> {responseHeader} </h2> </Modal.Header>
                <Modal.Content>
                    <Modal.Description>
                        <div className="response-message">
                            <div className="response-logo">
                                { icon }
                            </div>
                            { message }
                        </div>
                    </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                    <div className="answer-bar">
                        <Button onClick={this.props.handleClose} primary> Okay </Button>   
                    </div>
                </Modal.Actions>
            </Modal>

            }
          </div>
            
        );
    }
}
