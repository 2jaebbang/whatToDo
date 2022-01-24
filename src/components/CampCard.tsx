import { Link } from "react-router-dom";
import { ICamp } from "types/type";
import styled from "styled-components";
import fonts from "styles/fonts";
import dayjs from "dayjs";
import { maxWidth } from "styles/mixin";

interface IProps {
  camp: ICamp;
}

export default function CampCard({ camp }: IProps) {
  return (
    <Link to={`/camp/${camp.id}`}>
      <Container bgImg={camp.thumbnail}>
        <OpacityBlack />
        <div className="camp-content">
          <div className="camp-head">
            {camp.category}/{camp.skill}
          </div>
          <div className="camp-title">{camp.title}</div>
          <div className="camp-start-date">
            {dayjs(camp.dateStart).format("M월 DD일부터")}
          </div>
        </div>
      </Container>
    </Link>
  );
}

const Container = styled.div<{ bgImg: string }>`
  ${maxWidth}
  position: relative;
  background-image: url(${(props) => props.bgImg});
  background-size: cover;
  background-position: center;
  height: 280px;

  border-radius: 10px;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  .camp-content {
    padding: 20px;
    color: white;
    z-index: 1;
  }
  .camp-head {
    ${fonts.Caption}
    padding-bottom:10px;
  }
  .camp-title {
    ${fonts.Body1}
    font-weight:bold;
    padding-bottom: 10px;
  }
  .camp-start-date {
    ${fonts.Caption}
  }
`;

const OpacityBlack = styled.div`
  position: absolute;
  height: 50%;
  width: 100%;
  left: 0;
  bottom: 0;
  background: linear-gradient(
    180deg,
    rgba(39, 63, 40, 0) 0%,
    rgba(89, 89, 89, 0.558824) 15.62%,
    #000000 70.83%
  );
  border-radius: 0px 0px 10px 10px;
`;
