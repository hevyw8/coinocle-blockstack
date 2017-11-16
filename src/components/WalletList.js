import React from 'react';
import {Table} from 'reactstrap';
import WalletRow from './WalletRow';
import {Row, Col, Container, Button} from 'reactstrap';
import {tableMessage} from '../modules/message';
import AddWalletButton from "./AddWalletButton";
import { Link } from "react-router-dom";

export default class WalletList extends React.Component {
  render() {
    const holdings = this.props.holdings || {};
    const rows = this.props.list.map((row) => <WalletRow
        currency={this.props.currency}
        key={row.id}
        holdings={holdings[row.id]}
        coin={row}/>);
    const data = this.props.holdings;

    return (
        <Container>
        <h3 className="text-center">Holdings</h3>
        <Table className="table table-bordered table-striped table-hover">
          <thead>
          <tr>
            <th><strong>Coin</strong></th>
            <th><strong>Current Value</strong></th>
            <th></th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td><Link to={"/wallet/new"} className="addAWallet">
                Add a new coin
              </Link></td>
            <td className="empty-state">$0.00</td>
            <td></td>
          </tr>
          {rows}
          </tbody>
        </Table>
        <AddWalletButton />
        </Container>
    );
  }
}