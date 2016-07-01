import React from 'react';
var CSSTransitionGroup = React.addons.CSSTransitionGroup;

let Login = React.createClass({
    onSubmit(email, password) {
        $.ajax({
            url: "https://backend.dev.cookieclient.com/Token",
            dataType: 'json',
            type: 'POST',
            data: {
                grant_type: 'password',
                username: email,
                password: password
            },
            success: function(data) {
                alert(data.access_token);
                this.setState({
                    data: data let jwt = this.state.data;
                }.bind(this), error : function(xhr, status, err) {
                    alert("error");
                    console.error(this.props.url, status, err.toString());
                }.bind(this)
            });
        }, render() {
            return (
                <div>
                    <Logo/>
                    <LoginForm onSubmit={this.onSubmit}/>
                    <PasswordForm/>
                </div>
            )
        }
    });

    var Logo = React.createClass({
        render() {
            return (
                <div>
                    <img id="logo" src={'http://imgh.us/cookieclient_logo_1.svg'}/>
                </div>
            )
        }
    });

    var LoginForm = React.createClass({
        getInitialState() {
            return {email: '', password: ''};
        },

        handleEmailChange(event) {
            this.setState({email: event.target.value})
        },

        handlePasswordChange(event) {
            this.setState({password: event.target.value})
        },

        handleSubmit(event) {
            event.preventDefault();
            this.props.onSubmit(this.state.email, this.state.password);
        },

        renderForm() {
            return (
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <div className="input-group">
                            <span className="input-group-addon">
                                <span className="glyphicon glyphicon-envelope"></span>
                            </span>
                            <input valid="valid" className="form-control" placeholder="Email address" type="email" onChange={this.handleEmailChange} pattern="^\S+@\S+\.\S+$" title="Please enter a valid email address." required/>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="input-group">
                            <span className="input-group-addon">
                                <span className="glyphicon glyphicon-lock"></span>
                            </span>
                            <input className="form-control" placeholder="Password" type="password" onChange={this.handlePasswordChange} required/>
                        </div>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-block btn-cookie" type="submit">Login</button>
                    </div>
                </form>
            )
        },

        render() {
            return (
                <div>
                    {this.renderForm()}
                </div>
            )
        }
    });

    var PasswordForm = React.createClass({
        renderPasswordForm() {
            return (
                <div>
                    <label className="center clickable">
                        <a data-toggle="modal" data-target="#passwordModal">Forgot your password?</a>
                    </label>
                    <div className="modal fade" id="passwordModal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
                        <div className="modal-dialog modal-md">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h4>Password Reset</h4>
                                </div>
                                <div className="modal-body">
                                    <form>
                                        <div className="form-group">
                                            <label className="notbold">To reset your password, enter the email address you use to log in to
                                                <b>cookieclient.com</b>.</label>
                                        </div>
                                        <div className="form-group">
                                            <div className="input-group">
                                                <span className="input-group-addon">
                                                    <span className="glyphicon glyphicon-envelope"></span>
                                                </span>
                                                <input valid="valid" className="form-control" placeholder="Email address" type="email" pattern="^\S+@\S+\.\S+$" title="Please enter a valid email address." required/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <button className="btn btn-cookie" type="submit">Reset my password</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        },

        render() {
            return (
                <div>
                    {this.renderPasswordForm()}
                </div>
            )
        }
    });

    ReactDOM.render(
        <Login/>, document.getElementById("login"))
