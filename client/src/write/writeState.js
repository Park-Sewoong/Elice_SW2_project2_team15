import * as React from 'react';

import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import styled from 'styled-components';
import { ProposalForm, RecruitmentForm, ExhibitionForm } from './writeForm';

const WhiteTabs = styled(Tabs)({
  '& .MuiTabs-indicator': {
    backgroundColor: 'white',
  },
});
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
function WriteState() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Container>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            value={value}
            textColor="inherit"
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab
              label={<span style={{ color: 'white' }}>전시</span>}
              {...a11yProps(0)}
            />
            <Tab label="제안" {...a11yProps(1)} />
            <Tab label="팀원모집" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <ExhibitionForm />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <ProposalForm />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <RecruitmentForm />
        </TabPanel>
      </Box>
    </Container>
  );
}
export default WriteState;
const Container = styled.div`
  color=whtie

`;