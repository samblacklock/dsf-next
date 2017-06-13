import fetch from 'isomorphic-fetch';

const baseUrl = 'https://cdn.contentful.com';
const space = 'pisf6zzt2wph';
const accessToken = '03e973bf485cbf59d0aa2a0569b8b901e8e100c1d2128dcf917bb3234c4fb393';

const fetchData = fetch(`${baseUrl}/spaces/${space}/entries?access_token=${accessToken}`);

export default fetchData;
