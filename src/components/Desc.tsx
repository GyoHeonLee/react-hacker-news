import styled from "styled-components";
import Viewport from "../components/Viewport";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArticles } from "../api";

interface AData {
  descendants: number;
  id: number;
  kids: number[];
  score: number;
  time: number;
  text?: string;
  by: string;
  title: string;
  url?: string;
}

function Desc({ props }: any) {
  const newTime = (time: number) => {
    let newTime = Math.floor((Date.now() / 1000 - time) / 60);
    if (newTime < 60) return `${newTime} minutes`;
    else if (newTime < 60 * 24) return `${Math.floor(newTime / 60)} hours`;
    else return `${Math.floor(newTime / 60 / 24)} days`;
  };

  return (
    <>
      <DescHeader>
        <h2>{newTime(props?.time)} ago</h2>
        <h1>{props?.title}</h1>
        <section>
          <div>
            <span>{props?.score} points</span>
            <svg
              width="2"
              height="2"
              viewBox="0 0 2 2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="1" cy="1" r="1" fill="#E5E5EC" />
            </svg>
            <span>{props?.by}</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 5L9 8L6 11"
                stroke="#767676"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <a
            href={`https://news.ycombinator.com/item?id=${props?.id}`}
            target="_blank"
          >
            news.ycombinator.com
            <svg
              width="10"
              height="5"
              viewBox="0 0 10 5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 2.5C1 1.645 1.645 1 2.5 1H3.5C3.5 1 4 1 4 0.5C4 0 3.5 0 3.5 0H2.5C1.12 0 0 1.12 0 2.5C0 3.88 1.12 5 2.5 5H3.5C3.5 5 4 5 4 4.5C4 4 3.5 4 3.5 4H2.5C1.645 4 1 3.355 1 2.5ZM3 3H7C7 3 7.5 3 7.5 2.5C7.5 2 7 2 7 2H3C3 2 2.5 2 2.5 2.5C2.5 3 3 3 3 3ZM7.5 0H6.5C6.5 0 6 0 6 0.5C6 1 6.5 1 6.5 1H7.5C8.355 1 9 1.645 9 2.5C9 3.355 8.355 4 7.5 4H6.5C6.5 4 6 4 6 4.5C6 5 6.5 5 6.5 5H7.5C8.88 5 10 3.88 10 2.5C10 1.12 8.88 0 7.5 0Z"
                fill="#AFD8D8"
              />
            </svg>
          </a>
        </section>
      </DescHeader>
      {props?.text === undefined ? (
        <NoneDiv />
      ) : (
        <Text dangerouslySetInnerHTML={{ __html: props?.text }} />
      )}
    </>
  );
}

const DescHeader = styled.div`
  background-color: ${(props) => props.theme.backgroundColor};
  padding: 24px 20px 0;
  h2 {
    color: ${(props) => props.theme.accentColor};
    font-size: 12px;
    line-height: 16px;
    margin-bottom: 4px;
    opacity: 0.5;
  }
  h1 {
    font-size: 20px;
    line-height: 28px;
  }
  section {
    color: ${(props) => props.theme.listTop.text};
    font-size: 12px;
    line-height: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 0 16px;
    border-bottom: 1px solid ${(props) => props.theme.nav.line};
    div {
      color: ${(props) => props.theme.listItem.textAuthor};
      height: 16px;
      display: flex;
      align-items: center;
      span:first-child {
        margin-right: 4px;
      }
      svg {
        margin-right: 4px;
      }
    }
    a {
      height: 16px;
      display: flex;
      align-items: center;
      svg {
        margin-left: 2px;
      }
    }
  }
`;
const Text = styled.p`
  font-size: 16px;
  line-height: 24px;
  padding: 28px 36px 40px;
  border-radius: 0 0 24px 24px;
  box-shadow: 0px 3px 16px rgba(0, 0, 0, 0.08);
`;
const NoneDiv = styled.div`
  height: 40px;
  border-radius: 0 0 24px 24px;
  box-shadow: 0px 3px 16px rgba(0, 0, 0, 0.08);
`;

export default Desc;
