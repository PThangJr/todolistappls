import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from "../actions/index";

class TableAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      status: "notComplete"
    }
  }
 
  onReset = () => {
    this.setState({
      name: "",
      status: "notComplete"
    })
  }
  onAdd = (e) => {
    e.preventDefault();
    const {name} = this.state;
    const {onAddItem} = this.props;
    if (name === "") {
      alert("Vui lòng nhập tên công việc!!")
    }
    else {
      console.log(this.state)
      onAddItem(this.state);
      this.onReset();
    }
  }
  valueAdd = (e) => {
    // const {name, status} = this.state;
    const name = e.target.name;
    const value = e.target.value;
    // console.log(value)
    this.setState (
        {
          [name] : value
        }
      )
      
  }
    render() {
      // console.log(this.props.displayTableAdd)
      // console.log(this.state)
      const {status, name} = this.state;
      const { closeTableAdd } = this.props;
        return (
            <div className="add-box">
            <div className="add">
              <div className="add__header">
                <span className="add__header-text">
                  THÊM CÔNG VIỆC
                </span>
                <span 
                  className="add__header-btn-close"
                  onClick={() => closeTableAdd()}
                  >
                  <i className="fas fa-arrow-alt-circle-left" />
                </span>
              </div>
              <div className="add__menu">
                <form method="POST" className="add__menu-form">
                  <div className="add__menu-input-box">
                    <label className="add__menu-text">
                      Tên công việc :  
                    </label>
                    <input 
                      name="name"
                      type="text" 
                      value={name}
                      className="add__menu-input"
                      onChange={this.valueAdd}
                      autoFocus
                       />
                  </div>
                  <div className="add__menu-radio-box">
                    <input 
                      type="radio" 
                      id="notComplete" 
                      name="status" 
                      value="notComplete" 
                      className="add__menu-radio"
                      onChange={this.valueAdd}
                      checked={(status === "notComplete") ? true : false}
                       />
                    <label htmlFor="notComplete">Chưa hoàn thành</label>
                    <input 
                      type="radio" 
                      id="complete" 
                      name="status" 
                      value="complete"
                      className="add__menu-radio"
                      onChange={this.valueAdd}
                      checked={(status === "complete") ? true : false}
                       />
                    <label htmlFor="complete">Đã hoàn thành</label>
                  </div>
                  <div className="add__menu-btn-box">
                    <button 
                        type="submit" 
                        className="btn btn--primary"
                        onClick={this.onAdd}
                        >Thêm</button>
                    <button 
                      type="reset" 
                      className="btn btn--delete"
                      onClick={this.onReset}
                      >Reset</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        );
    }
}
const mapStateToProps = (state) => {
  return {
    displayTableAdd: state.displayTableAdd,
    addItem: state.addItem
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    closeTableAdd : () => {
    dispatch(actions.closeTableAdd());
  },
    onAddItem : (itemAdd) => {
      dispatch(actions.addItem(itemAdd));
    }
}
}

export default connect(mapStateToProps, mapDispatchToProps)(TableAdd);
// export default TableAdd;