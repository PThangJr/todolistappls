import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actions from "../actions/index";
class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      name: "",
      keyword: ""
    }
  }
  onUpdateItem = () => {
    const {onUpdateItem, displayUpdate, onCloseUpdateItem} = this.props;
    const {id, name} = this.state;
    // console.log(displayUpdate);
    onUpdateItem(id, name, displayUpdate);
    // console.log(this.state)
    onCloseUpdateItem(false);
  }
  onUpdateStatus = () => {
    const {id} = this.props.listItem;
    // console.log("Click")
    const {onUpdateStatus} = this.props;
    // console.log(onUpdateStatus)
    onUpdateStatus(id);
  }
  onDeleteItem = () => {
    const {id} = this.props.listItem;
    const {onDeleteItem} = this.props;
    // console.log("click")
    onDeleteItem(id);
    }
  onCloseUpdateItem = () => {
    const {displayUpdate} = this.props;
    const {onCloseUpdateItem} = this.props;
    onCloseUpdateItem(displayUpdate)
  }
    displayUpdate = (e) => {
      // console.log(e.target.value)
      const {id, name} = this.props.listItem;
      const {onDisplayUpdate, listItem} = this.props;
      this.setState({
        id: id,
        name: listItem.name
      })
      // console.log(listItem.name);
      onDisplayUpdate(id)
    }
    onChange = (e) => {
      const checkid = parseInt(e.target.getAttribute("checkid"))
      this.setState({
        id: checkid,
        name :  e.target.value
      })
    }
  renderStatus = () => {
    const { status } = this.props.listItem;
    if (status === "complete") {
      return (
        <span 
          className="btn btn--status btn--complete"
          onClick={this.onUpdateStatus}
          >
          <span 
            className="btn-pc">
            Đã hoàn thành
           </span>
          <span className="btn-mobile">
          </span>
        </span>
      )
    }
    else if (status === "notComplete") {
      return (
        <span 
          className="btn btn--not-complete"
          onClick={this.onUpdateStatus}
          
          >
                              Chưa hoàn thành
                            </span>
      )
    }
  }
  renderNameItem = () => {
    const { displayUpdate, byID, listItem } = this.props;
    const { name , id } = listItem;
    
    // console.log(byID)
    if (id === byID) {
      // console.log(name)
      if (displayUpdate) {
        return (
          <div className="table__repair-input">
              <div className="repair-input-box">
                <input 
                  type="text" 
                  className="repair-input" 
                  name="repair"
                  checkid={id}
                  value={this.state.name}
                  onChange={this.onChange}
                  autoFocus
                   />
                <span 
                  className="repair-input-close"
                  onClick={this.onCloseUpdateItem}
                >
                  <i className="fas fa-times" />
                </span>
              </div>
              <button 
                className="btn btn--primary"
                onClick={() => this.onUpdateItem()}
                >Cập nhật</button>
            </div>
        )
      }
      else {
        return (
            <p className="table__text ">
                {name}
            </p>
        )
      }
      }
      else {
        return (
            <p className="table__text ">
                {name}
            </p>
        )
      }
   
  }
  render() {
    const { listItem, stt, displayUpdate } = this.props;
    const { id, name, status } = listItem;
    // console.log(status)
    // console.log(displayUpdate)
    // console.log(this.state)


    return (
      <tr className= {status === "complete" ? "table__item complete" : "table__item" }>
        <td className="table__stt">
          {stt}
        </td>
        <td 
          className="table__name"
          
          >
          {
            this.renderNameItem()
          }
          
        </td>
        <td className="table__status">
          {
            this.renderStatus()
          }

        </td>
        <td className="table__actions">
          <div className="table__actions-btn">
            <button 
              className="btn  btn--repair"
              onClick={(e) => this.displayUpdate(e)}
              value={id}
              >
              <i className="fas fa-tools" />
              <span className="btn-mobile">
                Sửa
                                </span>
            </button>
            <button 
              className="btn  btn--delete"
              onClick={(e) => this.onDeleteItem(e)}
              >
              <i className="fas fa-trash-alt" />
              <span className="btn-mobile">
                Xóa
                                </span>
            </button>
          </div>
          <div className="table__actions-btn none">
            <button className="btn  btn--update">
              <i className="fas fa-edit" />
              <span className="btn-mobile">
                Cập nhật
                                </span>
            </button>
            <button className="btn  btn--back">
              <i className="fas fa-caret-square-left" />
              <span className="btn-mobile">
                Trở lại
                                </span>
            </button>
          </div>
        </td>
      </tr>
    );
  }
}
const mapStateToProps = (state) => {
  // console.log(state)
  return {
    byID: state.displayUpdate.byID,
    displayUpdate: state.displayUpdate.status
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    onUpdateStatus: (id) => {
      dispatch(actions.updateStatus(id))
    },
    onDeleteItem: (id) => {
      dispatch(actions.deleteItem(id));
    },
    onDisplayUpdate: (id) => {
      dispatch(actions.toggleUpdate(id))
    },
    onUpdateItem: (id, name ) => {
      dispatch(actions.updateItem(id, name ))
    },
    onCloseUpdateItem: () => {
      dispatch(actions.closeUpdate())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ListItem);
