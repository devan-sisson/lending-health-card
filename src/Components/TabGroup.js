import React from 'react'
import styled from 'styled-components'

export const Group = styled.div`
  display: flex;
  flex: 1 1 100%;
  border: 1px solid #D0D2D6;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 8px;
  cursor: pointer;

  & > * {
    flex: 1 1 100px;
  }
`

export const Tab = styled.div`
  display: flex;
  align-self: stretch;
  flex-flow: row wrap;
  padding: 8px;
  border-right: 1px solid #D0D2D6;
  background: #FFF;
  cursor: pointer;

  & > span {
    flex: 1 1 100%;
    align-self: flex-end;
    text-align:center;
  }
  &:first-of-type {
    border-bottom-left-radius: 4px;
    border-top-left-radius: 4px;
  }

  &:last-of-type {
    border-right: none;
    border-bottom-right-radius: 4px;
    border-top-right-radius: 4px;
  }
`

export const ActiveTab = styled(Tab)`
  background: #D0D2D6;
`

export const TabIcon = styled.img`
  width: 24px;
  height: auto;
  margin: 8px auto;
`

export const TabLabel = styled.span`
  font-family: Roboto, Helvetica, sans-serif;
`

const TabGroup = ({ selectTab, tabs, activeTab }) => (
  <Group>
    {
      tabs.map(tab => {
        const T = tab.label === activeTab ? ActiveTab : Tab;
        return (
        <T key={tab.label} onClick={(e)=>{selectTab(tab.label)}}>
          <TabIcon src={tab.iconSrc} />
          <TabLabel>
            {tab.label}
          </TabLabel>
        </T>
      )}
      )
    }
  </Group>
)

TabGroup.displayName = 'TabGroup'
TabIcon.displayName = 'TabIcon'
TabLabel.displayName = 'TabLabel'
ActiveTab.displayName = 'ActiveTab'
Tab.displayName = 'Tab'
Group.displayName = 'Group'

export default TabGroup
