import React, { useState, useEffect } from 'react';

import moment from 'moment';
import { useStaticQuery, graphql } from 'gatsby';
import Typography from '@material-ui/core/Typography';
import Layout from '../components/layout';


const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query AllPlugins{
      datasource{
        allPlugins{
          name
          type
        }
      }
    }
  `);

  const [time, setTime] = useState(moment());
  useEffect(() => {
    setInterval(() => {
      setTime(moment());
    });
  }, []);

  return (
    <Layout>
      <Typography variant="h1">{time.format('HH:mm:ss')}</Typography>
      <Typography variant="subtitle1">{time.format('DD. MMMM YYYY')}</Typography>
      {data.datasource.allPlugins.map((plugin) => (
        <>
          <Typography variant="h1">{plugin.name}</Typography>
          <Typography variant="subtitle1">{plugin.type}</Typography>
        </>
      ))}
    </Layout>
  );
};

export default IndexPage;
