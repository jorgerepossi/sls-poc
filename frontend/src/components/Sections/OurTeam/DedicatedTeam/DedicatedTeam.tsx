import React from "react";
import { Section, SectionCenter } from "../../../UI/Section";
import { Heading } from "../../../Heading";
import { Box, Typography } from "@material-ui/core";
import { Icon } from "../../../UI/Icon";
import { Link } from "react-router-dom";

import styled from "@emotion/styled";
import { Image } from "../../../UI/Image";
interface Props extends DynamicType {
  data?: any;
}

const ListTeamWorkStyled = styled.section`
  &#ListTeamWorkStyled {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 20px;

    .team-item {
      .team-item_wrap {
        padding: 0px 15px 64px 15px;
        &:hover .team__image-outer::after {
          box-shadow: 0px 0px 0px 2px #1c1c25 inset;
        }
        &:hover {
          .team__image {
            transform: translate(10px, 10px);
          }
          .team__media-wrapper
            .team__image-wrapper
            .team__image-outer
            .team__image {
            &:after {
              opacity: 1;
            }
          }
        }

        .team__media-wrapper {
          padding: 0px 0px 20px 0px;

          .team__image-wrapper {
            position: relative;
            line-height: 0;
            transition: all 0.45s;
            .team__image-outer {
              transition: all 0.45s;
              &:after {
                content: "";
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                transition: 0.3s;
                transform: translate(0, 0);
              }
              &:after {
                border-radius: 10px;
                transition: all 0.45s;
              }

              .team__image {
                border-radius: 10px;
                overflow: hidden;
                position: relative;
                transition: all 0.45s;
                img {
                  overflow: hidden;
                }
                &:after {
                  background-color: rgba(168, 170, 241, 0.85);
                }
                &:after {
                  opacity: 0;
                }
                &:after {
                  content: "";
                  position: absolute;
                  top: 0;
                  bottom: 0;
                  left: 0;
                  right: 0;
                  transition: 0.3s;
                  transform: translate(0, 0);
                }
              }
            }
          }
          .team__image-wrapper {
            border-radius: 10px;
          }
        }

        .team-item_info {
          .team_title_wrapper {
            text-align: center;

            p {
              padding: 0px 0px 10px 0px;
              color: #909090;
              font-family: var(--fontFamily) !important;
              font-weight: 400 !important;
            }
            .team_title {
              padding: 0px 0px 0px 0px;
              color: #1c1c25;
            }
          }
        }
        .team-icons {
          width: 100%;
          display: flex;
          justify-content: center;
          align-content: center;
          align-items: center;
          margin-top: 1rem;
          .iconWrapper {
            &.facebook {
              span {
                &:after {
                  background-color: var(--cyan-color);
                }
              }
            }
            &.twitter,
            &.linkedin {
              span {
                &:after {
                  background-color: var(--violet-color);
                }
              }
            }
          }
          .icon {
            font-size: 0.6rem;
            padding: 12.5px;
          }
        }
      }
    }
  }
`;

const ListTeamWork: React.FC<Props> = ({ data }): JSX.Element => {
  return (
    <ListTeamWorkStyled id="ListTeamWorkStyled">
      {data.map((item) => (
        <Box className="team-item" key={item.id}>
          <Box className="team-item_wrap">
            <Box className="team__media-wrapper">
              <Box className="team__image-wrapper">
                <Link className="team__image-outer">
                  <Box className="team__image">
                    <Image src={item.img} alt={item.name} title={item.name} />
                  </Box>
                </Link>
              </Box>
            </Box>
            <Box>
              <Box className="team-item_info">
                <Box className="  team_title_wrapper">
                  <Typography component="h2" className="team_title">
                    {item.name}{" "}
                  </Typography>
                  <Typography component="p"> {item.teamStatus} </Typography>
                </Box>
              </Box>
            </Box>

            <Box>
              <Section Flex JustifyCenter>
                <Box className="team-icons">
                  {item.socialMedia.map((item) => (
                    <Box className={`iconWrapper ${item.classname}`}>
                      <Icon iconimg={item.name} />
                    </Box>
                  ))}
                </Box>
              </Section>
            </Box>
          </Box>
        </Box>
      ))}
    </ListTeamWorkStyled>
  );
};

export const Team: React.FC<Props> = ({ data }) => {
  return (
    <Section>
      <SectionCenter>
        <Heading
          className="textCenter"
          title="Our Dedicated Team"
          subtitle="Our Team"
          content="But building it before the development of a full-fledged application is a widespread practice that always pays off in the end."
          AlignContent="center"
          AlignItems="center"
          Display="flex"
        />
      </SectionCenter>
      <SectionCenter id="ListCoWorkers">
        <ListTeamWork data={data} />
      </SectionCenter>
    </Section>
  );
};
