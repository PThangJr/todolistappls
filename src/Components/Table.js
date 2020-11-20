import React, { Component } from 'react';
import ListItem from './ListItem';
import { connect } from "react-redux";
import * as actions from "../actions/index";

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fieldName: "",
      fieldStatus: -1,
      sort: {
        by: "",
        status: -1
      }
    }
  }
  onQuickFilter = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    })
  }
  onClear = () => {
    this.setState({
      fieldName: "",
      fieldStatus: -1
    })
  }
  onHandleSort = (e, by, status) => {
    // e.stopPropagation();
    // const {sort, status} = this.state;
    const { onHandleSort } = this.props;
    // this.setState({
    //   sort: {
    //     by,
    //     status: status + 1
    //   }
    // })
    const sort = {
      by,
      status
    }
    onHandleSort(sort);
  }
  removeAccents = (str) => {
    return str.normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/đ/g, 'd').replace(/Đ/g, 'D');
  }
  render() {
    // console.log(this.state)
    // console.log(this.props.dataTodos);
    let { dataTodos, keyword, sort } = this.props;
    const { fieldName, fieldStatus } = this.state;
    // console.log(sort)
    if (dataTodos) {
      console.log(dataTodos);
      if (fieldName) {
        dataTodos = dataTodos.filter((item, index) => {
          return item.name.toLowerCase().trim().indexOf(fieldName.toLowerCase().trim()) !== -1;
        })
      }
      dataTodos = dataTodos.filter((item, index) => {
        // let status = item.status === "complete" ? 1 : item.status === "notComplete" ? 0 : -1;
        // return status !== parseInt(fieldStatus);
        if (parseInt(fieldStatus) === -1) {
          return item;
        }
        else {
          let status = item.status === "complete" ? 1 : item.status === "notComplete" ? 0 : -1;
          return status !== parseInt(fieldStatus);
        }
      })
      if (keyword) {
        dataTodos = dataTodos.filter((item) => {
          return item.name.toLowerCase().trim().indexOf(keyword.toLowerCase().trim()) !== -1;
        })
      }
      if (sort.by === "name") {
        if (sort.sortName === -1) {

        }
        if (sort.sortName === 0) {
          dataTodos = dataTodos.sort((a, b) => {
            if (this.removeAccents(a.name.toUpperCase()) < this.removeAccents(b.name.toUpperCase())) {
              return -1;
            }
          })
        }
        if (sort.sortName === 1) {
          dataTodos = dataTodos.sort((a, b) => {
            if (this.removeAccents(a.name.toUpperCase()) > this.removeAccents(b.name.toUpperCase())) {
              return -1;
            }

          })
        }
      }
      else if (sort.by === "status") {
        if (sort.sortStatus === -1) {

        }
        if (sort.sortStatus === 0) {
          dataTodos = dataTodos.sort((a, b) => {
            if (a.status.toUpperCase() < b.status.toUpperCase()) {
              return 1;
            }
            if (a.status.toUpperCase() > b.status.toUpperCase()) {
              return -1;
            }
            else {
              return 0;
            }
          })
        }
        if (sort.sortStatus === 1) {
          dataTodos = dataTodos.sort((a, b) => {
            if (a.status.toUpperCase() < b.status.toUpperCase()) {
              return -1;
            }
            if (a.status.toUpperCase() > b.status.toUpperCase()) {
              return 1;
            }
            else {
              return 0;
            }
          })
        }
      }

    }

    let elemListItem = dataTodos.map((item, index) => {
      return <ListItem
        stt={index + 1}
        key={index}
        listItem={item}
      >
      </ListItem>
    });


    return (
      <section className="tables">
        <table className="table">
          <thead className="table__header">
            <tr className="table__item">
              <td className="table__stt">
                STT
                          </td>
              <td
                className="table__name"
                onClick={(e) => this.onHandleSort(e, "name", -1)}

              >
                <span className="table__text">
                  Tên công việc
                            </span>
                <div className="table__icon-box">
                  <span
                    className={sort.sortName === -1 ? "table__icon" : "table__icon display-none"}>
                    <i className="fas fa-sort" />
                  </span>
                  <span
                    className={sort.sortName === 0 ? "table__icon" : "table__icon display-none"}>
                    <i className="fas fa-sort-amount-up" />
                  </span>
                  <span
                    className={sort.sortName === 1 ? "table__icon" : "table__icon display-none"}>
                    <i className="fas fa-sort-amount-down" />
                  </span>
                </div>
              </td>
              <td
                className="table__status"
                onClick={(e) => this.onHandleSort(e, "status", -1)}
              >
                <span className="table__text">
                  Trạng thái
                            </span>
                <div className="table__icon-box">
                  <span
                    className={sort.sortStatus === -1 ? "table__icon" : "table__icon display-none"}>
                    <i className="fas fa-sort" />
                  </span>
                  <span
                    className={sort.sortStatus === 0 ? "table__icon" : "table__icon display-none"}>
                    <i className="fas fa-sort-amount-up" />
                  </span>
                  <span
                    className={sort.sortStatus === 1 ? "table__icon" : "table__icon display-none"}>
                    <i className="fas fa-sort-amount-down" />
                  </span>
                </div>
              </td>
              <td className="table__actions">
                Thao tác
                          </td>
            </tr>
            <tr className="table__filter">
              <td className="table__stt">
              </td>
              <td className="table__filter-name table__name">
                <input
                  type="text"
                  className="table__quick-search"
                  name="fieldName"
                  placeholder="Tìm kiếm nhanh..."
                  onChange={this.onQuickFilter}
                  value={fieldName}
                />
                <span
                  className="table__quick-search-reset"
                  onClick={this.onClear}
                >
                  <i className="fas fa-times" />
                </span>
              </td>
              <td className="table__status">
                <select
                  name="status-filter"
                  className="status-filter"
                  name="fieldStatus"
                  onChange={this.onQuickFilter}
                >
                  <option value={-1} className="status-filter__options">
                    Tất cả
                              </option>
                  <option value={-0} className="status-filter__options">
                    Đã hoàn thành
                              </option>
                  <option value={1} className="status-filter__options">Chưa hoàn
                                thành</option>
                </select>
              </td>
              <td className="table__actions">
              </td>
            </tr>
          </thead>
          <tbody className="table__body">
            {elemListItem}

          </tbody>
        </table>
      </section>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    dataTodos: state.dataTodos,
    keyword: state.search,
    sort: state.sort

  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    onHandleSort: (sort) => {
      dispatch(actions.sort(sort))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Table);