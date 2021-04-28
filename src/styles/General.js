import styled from "styled-components";

export const LogoWrapper = styled.img`
  width: 80px;
  height: 80px;
  display: block;
`;

export const ElementsTitleWrapper = styled.h4`
  text-align: left;
`;
export const Container = styled.div`
  width: 70%;
  height: 100%;
  margin: 0 auto;
  padding: 0 8px;
  background: white;
  box-sizing: border-box;
  @media (max-width: 768px) {
    width: 100%;
    padding: 0 22px;
  }
`;
export const BodyWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const NavItemsWrapper = styled.ul`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  list-style: none;
  border-radius: 4px;
  border: 1px solid #d4cdcd;
  width: 100%;
  margin: 0;
  padding: 4px 15px;
  box-sizing: border-box;
  background-color: #ffffff;
  .list-item::after {
    content: "";
    width: 0px;
    height: 0px;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid black;
    box-sizing: border-box;
    position: relative;
    top: 5px;
    right: 50%;
    margin: 0px -10px;
    z-index: 40;
  }
  @media (max-width: 768px) {
    li {
      position: static;
      margin: 8px 4px;
    }
    li:nth-of-type(1n + 3) {
      display: none;
    }
  }
  .highlight {
    border: 1px solid red !important;
  }
`;

export const ListElementWrapper = styled.li`
  position: relative;
  font-size: 14px;
  border: 1px solid #d1d1d185;
  border-radius: 5px;
  cursor: pointer;
  padding: 4px 15px;
  margin: 8px 15px;
  background: #d1d1d185;
`;
export const PopupContentWrapper = styled.div`
  position: ${(props) =>
    props.popupPosition ? props.popupPosition : "absolute"};
  top: 140%;
  left: 0px;
  width: 280px;
  min-height: 180px;
  border: 1px solid #bcbcbc;
  z-index: 10;
  padding: 8px;
  background: #ffffff;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  cursor: default;
  @media (max-width: 768px) {
    width: 100% !important;
    box-sizing: border-box;
    top: 93% !important;
    padding: ${(props) => (props.popupPadding ? props.popupPadding : "8px")};
  }
`;

export const CollapsibleElementWrapper = styled.div`
  width: 100%;
  .content {
    padding: 0 18px;
    display: none;
    overflow: auto;
    max-height: 200px;
    background-color: #f1f1f1;
  }
  .display-block {
    display: block;
  }
  .padding-0 {
    padding: 0px;
  }
`;
export const CollapsibleElementBtnWrapper = styled.button`
  background-color: #d1d1d185;
  color: black;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  font-size: 15px;

  &::after {
    content: "\\002B";
    color: black;
    font-weight: bold;
    float: right;
    margin-left: 5px;
  }
  &::hover {
    background-color: #555;
  }
  &.active::after {
    content: "\\2212";
  }
  &.active::hover {
    background-color: #555;
  }
`;
export const PopupOptionsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  span {
    margin: 4px;
    padding: 3px 6px;
    border: 1px solid #e3f2fd;
    border-radius: 5px;
    font-size: 14px;
    color: black;
    cursor: pointer;
    background: #d1d1d185;
  }
`;

export const PopupActionBtnsWrapper = styled.div`
  display: flex;
  flex-wrap: no-wrap;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
  margin-top: 25px;
  button {
    cursor: pointer;
    border: 1px solid #545454;
    border-radius: 4px;
    padding: 2px 15px;
  }
  .apply-btn {
    margin-left: auto;
  }
`;

export const AppliedFiltersWrapper = styled.div`
  display: flex;
  flex-wrap: no-wrap;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 200px 0 0 120px;
  h4 {
    min-width: 120px;
    margin: 8px;
  }
  @media (max-width: 768px) {
    margin: 200px 0 0 0px;
    h4 {
      margin-left: 0px;
    }
  }
`;

export const SelectedFiltersWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  .clear-all-btn {
    cursor: pointer;
    padding: 5px 6px;
    border: 0;
    border-radius: 5px;
    margin: 4px;
    color: white;
    background: #e00000;
  }
`;

export const SelectedFilterWrapper = styled.div`
  margin: 4px;
  padding: 4px 6px;
  font-size: 14px;
  color: black;
  cursor: pointer;
  background: #d1d1d185;
  border: 1px solid #545454;
  border-radius: 5px;

  .close-icon {
    color: black;
    cursor: pointer;
    margin-left: 15px;
  }
`;

export const MoreFiltersWrapper = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block !important;
    list-style: none;
  }
`;
