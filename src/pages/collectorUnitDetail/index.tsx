/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";

import CollectorTile from "@components/tiles/collectorTile";
import borlagoapi from "@/src/api";
import { useAuthContext } from "@contexts/authContext";
import Loader from "@components/loader";
import { Button } from "@/src/components/button";
import { PageContainer, Heading } from "@src/commonStyles";
import {
  Wrapper,
  Name,
  Detail,
  CurrentLocation,
  Map,
  Collectors,
} from "./styles";
import { User } from "@/src/types/user";

const CollectorUnitDetailPage = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const { token } = useAuthContext();
  const [data, setData] = useState<any>(null);

  const { isLoading } = useQuery("collector-units", async () => {
    const { data } = await borlagoapi.get(
      `/administrator/collector-unit/detail/${id}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    setData(data);
  });

  return (
    <PageContainer>
      {isLoading ? (
        <Loader size="md" />
      ) : data ? (
        <Wrapper>
          <Name>{data.name}</Name>

          <div className="details">
            <Detail>
              <span>{t("page.collectorUnitDetail.status")}</span>
              <span>
                {data.available === true ? "Available" : "Not Available"}
              </span>
            </Detail>

            <Detail>
              <span>{t("page.collectorUnitDetail.country")}</span>
              <span>{data.country}</span>
            </Detail>

            <Detail>
              <span>{t("page.collectorUnitDetail.region")}</span>
              <span>{data.region}</span>
            </Detail>
          </div>

          <div className="main">
            <CurrentLocation>
              <p>{t("page.collectorUnitDetail.location")}</p>
              <Map></Map>
            </CurrentLocation>

            {data.collectors.map((collector: User) => (
              <Collectors key={collector.id}>
                <p>{t("page.collectorUnitDetail.collectors")}</p>
                <Heading>
                  <span>{t("page.collectors.firstName")}</span>
                  <span>{t("page.collectors.lastName")}</span>
                  <span>{t("page.collectors.gender")}</span>
                  <span></span>
                </Heading>
                <CollectorTile
                  id={collector.id}
                  firstName={collector.first_name}
                  lastName={collector.last_name}
                  gender={collector.gender}
                  profilePhoto={collector.profile_photo}
                />
                <Button style={{ marginTop: "10px" }} width="100%">
                  {t("btn.editCollectors")}
                </Button>
              </Collectors>
            ))}
          </div>
        </Wrapper>
      ) : (
        <h1>{t("error.wrong")}</h1>
      )}
    </PageContainer>
  );
};

export default CollectorUnitDetailPage;
