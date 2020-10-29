import React, { Component } from 'react';
import ListItem from './ListItem';
import { connect } from "react-redux";
import * as actions from "../actions/index";

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fieldName: "",
      fieldStatus: -1
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
    render() {

      // console.log(this.props.dataTodos);
      let {dataTodos, displayTableAdd, toggleTableAdd} = this.props;
      const {fieldName, fieldStatus} = this.state;
      // console.log(dataTodos)
      if (fieldName) {
        dataTodos = dataTodos.filter((item, index) => {
          return item.name.toLowerCase().indexOf(fieldName.toLocaleLowerCase()) !== -1;
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
                          <td className="table__name">
                            <span className="table__text">
                              Tên công việc
                            </span>
                            <div className="table__icon-box">
                              <span className="table__icon">
                                <i className="fas fa-sort" />
                              </span>
                              <span className="table__icon">
                                <i className="fas fa-sort-amount-down" />
                              </span>
                              <span className="table__icon">
                                <i className="fas fa-sort-amount-up" />
                              </span>
                            </div>
                          </td>
                          <td className="table__status">
                            <span className="table__text">
                              Trạng thái
                            </span>
                            <div className="table__icon-box">
                              <span className="table__icon">
                                <i className="fas fa-sort" />
                              </span>
                              <span className="table__icon">
                                <i className="fas fa-sort-amount-down" />
                              </span>
                              <span className="table__icon">
                                <i className="fas fa-sort-amount-up" />
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
    dataTodos: state.dataTodos
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Table);