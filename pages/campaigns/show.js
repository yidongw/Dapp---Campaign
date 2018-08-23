import React, { Component } from 'react';
import { Card, Grid, Button } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import Campaign from '../../ethereum/campaign';
import web3 from '../../ethereum/web3';
import ContributeForm from '../../components/ContributeForm';
import { Link } from '../../routes';

class CompaignShow extends Component {

  static async getInitialProps (props) {
    // console.log("getInitialProps called");
    const campaign = Campaign(props.query.address)

    const summary = await campaign.methods.getSummary().call();

    return {
      campaign: campaign,
      address: props.query.address,
      minimumContribution: summary[0],
      balance: summary[1],
      requestsCount: summary[2],
      approversCount: summary[3],
      manager: summary[4]
    };
  }

  renderCards() {
    const {
      balance,
      manager,
      minimumContribution,
      requestsCount,
      approversCount
    } = this.props;

    const items = [
      {
        header: manager,
        meta: 'Address of Manager',
        description: 'This manager created this campaign and create requests to withdraw money.',
        style: { overflowWrap: 'break-word'}
      },
      {
        header: minimumContribution,
        meta: 'minimumContribution',
        description: 'You have to contribute at least this amount of wei'
      },
      {
        header: requestsCount,
        meta: 'Number of Requests',
        description: 'Request must be approved by approvers'
      },
      {
        header: approversCount,
        meta: 'Number of Approvers',
        description: 'Number of people who donated money'
      },
      {
        header: web3.utils.fromWei(balance, 'ether'),
        meta: 'Campaign Balance (ether)',
        description: 'How much money we have left to spend'
      }
    ];

    return <Card.Group items = {items} />;
  }

  render() {
    return (
      <Layout>
        <h3>Campaign Show</h3>
        <Grid>
          <Grid.Row>
            <Grid.Column width={10} >
              {this.renderCards()}
            </Grid.Column>

            <Grid.Column width={6}>
              <ContributeForm address={this.props.address}/>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Link route={`/campaigns/${this.props.address}/requests`}>
                <a>
                  <Button primary>View Request</Button>
                </a>
              </Link>
            </Grid.Column>
          </Grid.Row>
        </Grid>


      </Layout>
    );
  }
}

export default CompaignShow;
