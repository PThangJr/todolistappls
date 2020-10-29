import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actions from "../actions/index";
class Controls extends Component {
  onToggleForm = () => {
    const {toggleTableAdd} = this.props;
    // this.props.onToggleTableAdd();
    // this.props.onToggleTableAdd();
    toggleTableAdd()
  }
  generateID = () => {
    return Date.now();
  }
    render() {
      const {toggleTableAdd, displayTableAdd} = this.props;
      // console.log(toggleTableAdd);
      // console.log(displayTableAdd);
        return (
            <section className="option">
                    <div className="row">
                      <div className="col-lg-12 col-sm-12">
                        <button 
                          className="btn btn---primary btn--blue btn--search "
                          onClick={this.onToggleForm}
                        >
                          <i className="fas fa-plus-circle" />
                          <span className="btn__name">
                            Thêm công việc
                          </span>
                        </button>
                        <div className="option__search">
                          <input type="text" className="option__search-input"
                           placeholder="Nhập từ khóa tìm kiếm..." />
                          <button className="btn btn--blue btn--primary btn--search">
                            <i className="fas fa-search" />
                            <span className="btn__name">
                              Tìm kiếm
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </section>
        );
    }
}
const mapStateToProps = (state) => {
  return {
    displayTableAdd : state.displayTableAdd
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    toggleTableAdd: () => {
      dispatch(actions.toggleTableAdd());
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Controls);