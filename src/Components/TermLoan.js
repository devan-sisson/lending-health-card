import React from 'react'
import styled from 'styled-components'
import SmlBiz from './SmlBiz';

export const ActionRequiredWrapper = styled.div`
  border: 1px solid #D0D2D6;
  display: grid;
  grid-template-rows: 1fr;
  grid-gap: 16px;
  justify-content: center;
  flex: 1 1 auto;
  padding: 32px;
  border-radius: 4px;
  text-align: center;
`

export const ActionRequiredHeader = styled.h1`
  font-family: Helvetica, Arial, sans-serif;
  margin: 0px;
  padding: 0px;
  color: #444751;
`

export const ActionRequiredDescription = styled.p`
  font-family: Roboto, Helvetica, sans-serif;
  display: block;
  padding: 0;
  margin: 0px;
  color: #444751;
  font-size: 16px;
  line-height: normal;
  line-weight: normal;
  font-style: normal;
`

export const ActionRequiredPlus = styled.span`
  position: relative;
  display: inline-block;
  width: 1.4em;
  margin: auto;

  &::before {
    content: '+';
    font-size: 1.4em;
    display: inline-block;
    line-height: .87;
    width: 1em;
  }

  &::after {
    content: '';
    position: absolute;
    top: -3px;
    left: -2px;
    border-radius: 50%;
    border: 2px solid currentColor;
    display: inline-block;
    width: 1.4em;
    height: 1.4em;
  }
`



const ActionRequired = ({ header, description }) => (
  <ActionRequiredWrapper>
    <SmlBiz/>{/* I wasn't sure how I would make this dynamic--become a different icon for a different action. */ }
    <ActionRequiredHeader>{ header }</ActionRequiredHeader>
    <ActionRequiredDescription>{ description }</ActionRequiredDescription>
    <ActionRequiredPlus />{/* Same here. though I would think that the add function wouldn't be different, but I could be wrong. */}
    <ActionRequiredDescription>add</ActionRequiredDescription>
  </ActionRequiredWrapper>
)

ActionRequiredWrapper.displayName = 'ActionRequiredWrapper'
ActionRequired.displayName = 'ActionRequired'

export default ActionRequired
