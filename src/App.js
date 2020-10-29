import React, { Component } from 'react';
import Controls from './Components/Controls';
import Table from './Components/Table';
import TableAdd from './Components/TableAdd';
import { connect } from "react-redux";
// import demo from "./demoredux/demo";


class App extends Component {
  constructor(props) {
    super(props);
    
  }

  
  render() {
    const {displayTableAdd} = this.props;
    // console.log(this.props.displayTableAdd)
    return (
     
        <div>
  <div className="container">
    <div className="row">
      <div className="col-lg-12 col-sm-12">
        <header className="header">
          <h2 className="header__text">
            Quản lý công việc
          </h2>
        </header>
      </div>
    </div>
  </div>
  <main className="main">
    <div className="container-fluid">
      <div className="row">
        <div className={displayTableAdd ? " col-lg-3 col-sm-12" : " col-lg-3 col-sm-12 display-none"}>
          <TableAdd></TableAdd>
        </div>
        <div className={displayTableAdd ? " col-lg-9 col-sm-12" : "col-lg-12 col-sm-12" } >
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-sm-12">
                <div className="right">
                  <Controls></Controls>
                  <Table></Table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  </div>


      
    );
  }
}
const mapStateToProps = (state) => {
  return {
    displayTableAdd: state.displayTableAdd,
    
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
