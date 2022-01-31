import styled from "styled-components";

function ListItem() {
  return (
    <Li>
      <h1>Apple contributes to OBS to support screen capture using </h1>
      <section>
        <div className="author">
          <span>bryanrasmussen</span>
          <img src="image/rightArrow.png" alt="right arrow" />
        </div>
        <div className="side">
          <div>
            <img src="image/point.png" alt="comment" />
            1000
          </div>
          <div>
            <img src="image/comment.png" alt="comment" />
            1000
          </div>
        </div>
      </section>
    </Li>
  );
}

const Li = styled.li`
  background-color: ${(props) => props.theme.backgroundColor};
  width: 100%;
  border-radius: 16px;
  padding: 16px 16px 12px;
  margin-bottom: 12px;
  h1 {
    font-size: 18px;
    line-height: 24px;
    padding-bottom: 12px;
    border-bottom: 1px solid ${(props) => props.theme.listColor};
  }
  section {
    margin-top: 8px;
    height: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .author {
      display: flex;
      align-items: center;
      font-size: 12px;
      line-height: 16px;
      img {
        width: 6px;
        margin-left: 6px;
      }
    }
    .side {
      display: flex;
      font-size: 12px;
      line-height: 16px;
      img {
        width: 16px;
        height: 16px;
        margin: 0 2px;
      }
      div {
        display: flex;
        align-items: center;
        margin-left: 8px;
      }
    }
  }
`;

export default ListItem;
