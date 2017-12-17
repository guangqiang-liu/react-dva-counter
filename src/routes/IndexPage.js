import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';

function IndexPage({dispatch, count}) {

  function minusClick(value) {
    dispatch({type: 'count/minus'})
  }

  function addClick(value) {
    dispatch({type: 'count/add'})
  }

  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>Yay! Welcome to dva!</h1>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>To get started, edit <code>src/index.js</code> and save to reload.</li>
        <li><a href="https://github.com/dvajs/dva-docs/blob/master/v1/en-us/getting-started.md">Getting Started</a></li>
      </ul>
      <h2>{ count }</h2>
      <button className={styles.minus} onClick={minusClick.bind(null, 'xx')}>-</button>
      <button className={styles.add} onClick={addClick.bind(null, 'oo')}>+</button>
    </div>
  );
}

IndexPage.propTypes = {
};

function mapStateToProps(state) {
  return {
    count: state.count
  }
}

const _IndexPage = connect(mapStateToProps)(IndexPage)

export default _IndexPage
