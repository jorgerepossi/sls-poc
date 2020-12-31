import styled from "@emotion/styled";
import { Box, Typography } from "@material-ui/core";
import React from "react";
import { Image } from "../../UI/Image";
import { Section } from "../../UI/Section";

interface Props extends InfoProps {
  color?: string;
}

interface DOMAttr extends React.HTMLAttributes<HTMLElement> {
  background?: string;
}

export const TextBoxesLight: React.FC<Props & DOMAttr> = ({
  color,
  data,
  background,
}): JSX.Element => {
  return (
    <TextBoxesLightStyled color={color} background={background}>
      <Section>
        <Box className="column-gap-default super-margin">
          {data.map((item, key) => (
            <Box className="top-column" key={item.id}>
              <Box className="column-wrap">
                <Box className="widget-wrap">
                  <Box className="widget-container">
                    <Box className="info-box">
                      <Box className="info-box-container">
                        <Box className="image-wrapper">
                          <figure>
                            <Image
                              src={item.image}
                              alt={item.title}
                              title={item.title}
                            />
                          </figure>
                        </Box>
                        <Box className="content_wrapper">
                          <Box className="title-wrapper">
                            <Typography variant="h3" className="title">
                              {item.title}
                            </Typography>
                          </Box>
                          <Typography paragraph={true}>{item.text}</Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Section>
    </TextBoxesLightStyled>
  );
};

export const TextBoxesLightStyled = styled.section`
  background: ${(props) => (props.color ? props.color : "#F8F8F8")};
  padding: 0.5rem 0;
  .column-gap-default {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    @media (min-width: 1170px) {
      grid-template-columns: repeat(4, 1fr);
    }

    @media (max-width: 767px) {
      grid-template-columns: repeat(1, 1fr);
    }
    & > :nth-of-type(2),
    > :nth-of-type(4) {
      margin-top: 4rem;
    }
    .top-column {
      .column-wrap {
        padding: 1rem;
        .widget-wrap {
          display: flex;
          .widget-container {
            .info-box {
              .info-box-container {
                display: flex;
                .image-wrapper {
                  figure {
                    margin: 0px 120px 0px 0px;
                    width: 80%;
                  }
                }
                .content_wrapper {
                  .title-wrapper {
                    .title {
                      font-size: 1.3rem;
                      margin: 9px 0px 5px 0px;
                      color: #232323;
                      line-height: 1.5;
                      word-break: break-word;
                      transition: 0.4s;
                      font-weight: 800;
                    }
                  }
                }
              }
            }
            &:hover {
              .info-box
                .info-box-container
                .content_wrapper
                .title-wrapper
                .title {
                //color: #ff9083;
                color: ${(props) => (props.background ? "#75E8EF" : "#ff9083")};
              }
            }
          }
        }
      }
    }
  }
`;
