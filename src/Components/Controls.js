import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actions from "../actions/index";
class Controls extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: "",
    }
  }
  
  onToggleForm = () => {
    const {toggleTableAdd} = this.props;
    // this.props.onToggleTableAdd();
    // this.props.onToggleTableAdd();
    toggleTableAdd()
  }
  onChangeSearch = (e) => {
    this.setState({
      keyword: e.target.value
    })
  }
  onSearch = () => {
    const {keyword} = this.state;
    const {onSearch} = this.props;
    onSearch(keyword)
  }
    render() {
      // const {toggleTableAdd, displayTableAdd} = this.props;
      // console.log(toggleTableAdd);
      // console.log(displayTableAdd);
      // console.log(this.state)
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
                          <input 
                            type="text"
                            name="fieldSearch"
                            className="option__search-input"
                            placeholder="Nhập từ khóa tìm kiếm..." 
                            onChange={this.onChangeSearch}
                            />
                          <button 
                            className="btn btn--blue btn--primary btn--search"
                            onClick={this.onSearch}
                            >
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
    },
    onSearch: (keyword) => {
      dispatch(actions.search(keyword))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Controls);