/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {Button, ScrollView, StyleSheet, View} from 'react-native';
import CoinItem from './CoinItem';
import axios from 'axios';
import {getConinIconUri} from './Constants';

const sampleData = [
  {
    circulating_supply: 185000,
    cmc_rank: 1,
    date_added: '2020-12-01T00:00:00.000Z',
    id: 1,
    last_updated: '2020-12-01T00:00:00.000Z',
    max_supply: 21000000,
    name: 'BitCoin',
    num_market_pairs: 9550,
    platform: null,
    quote: [Object],
    slug: 'bitcoin',
    symbol: 'BTC',
    tags: [Array],
    total_supply: 185000,
  },
  {
    circulating_supply: 111111,
    cmc_rank: 2,
    date_added: '2020-12-01T00:00:00.000Z',
    id: 2,
    last_updated: '2020-12-01T00:00:00.000Z',
    max_supply: null,
    name: 'Ethereum',
    num_market_pairs: 5775,
    platform: null,
    quote: [Object],
    slug: 'ethereum',
    symbol: 'ETH',
    tags: [Array],
    total_supply: 111111,
  },
];

const client = axios.create({
  baseURL: 'https://pro-api.coinmarketcap.com',
  method: 'GET',
  headers: {
    'content-type': 'application/json',
    'X-CMC_PRO_API_KEY': '4a9c20ad-a332-4f42-94b2-b556dde8f8f2',
  },
});

export default class CoinView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coinData: [],
      isLoading: false,
    };
  }

  componentDidMount() {
    // this.getCoinData();
    // setInterval(() => {
    //   this.getCoinData();
    // }, 10000); //10초마다 1000ms -> 1초, 10000 10초
  }

  getCoinData = async () => {
    this.setState({
      isLoading: true,
    });
    try {
      await client
        .get('/v1/cryptocurrency/listings/latest', {
          params: {limit: 10},
        })
        .then((res) => {
          // console.log('res:', res);
          console.log('API 조회완료');
          const {
            data: {data},
          } = res;
          // console.log(data);
          this.setState({
            coinData: data,
          });
        })
        .catch((err) => {
          console.error('getCoinData():', err);
          alert('API조회 오류발생 \n 관리자 문의 요망');
        });
    } catch (error) {
      console.error('getCoinData():', error);
      alert('API 오류 발생 \n 관리자 문의 요망');
    }
  };

  render() {
    let coinItems = this.state.coinData.map((item, index) => {
      const {cmc_rank, id, name, num_market_pairs, total_supply} = item;
      return (
        <CoinItem
          key={index}
          name={name}
          rank={cmc_rank}
          price={num_market_pairs}
          volume={total_supply}
          iconUrl={getConinIconUri(name)}
        />
      );
    });
    return (
      <View>
        <Button title="재조회" onPress={this.getCoinData} />
        <ScrollView>
          <View style={styles.container}>{coinItems}</View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e9e9e9',
  },
});
