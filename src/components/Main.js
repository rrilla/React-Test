import React from 'react';
import styled from 'styled-components';

const Main = () => {
  const MainS = styled.div`
    margin: 30px 80px;
  `;

  const SectionS = styled.div``;

  const SectionTitleS = styled.div`
    font-size: 25px;
    font-weight: 800;
    color: rgb(68, 66, 66);
    margin: 0 0 20px 0;
  `;

  const SectionTitle2S = styled.div`
    font-size: 25px;
    font-weight: 800;
    color: rgb(68, 66, 66);
    margin: 20px 0 0 0;
  `;

  const CardBoxS = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 10px;
  `;

  const CardS = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr;
    border: 1px solid rgb(212, 210, 210);
    border-radius: 6px;
    box-shadow: 0 0 3px 0 rgb(172, 170, 170);
  `;

  const CardContentS = styled.div`
    align-items: center;
  `;

  const CardImgS = styled.div`
    height: 70px;
    background-size: 100% 100%;
  `;

  const ProS = styled.div`
    border-radius: 20px;
    margin: 40px 0;
    background-image: url('images/ad1.jpg');
    height: 350px;
    background-size: 100% 100%;
  `;

  const Pro2S = styled.div`
    margin: 20px 0;
    background-image: url('images/ad2.png');
    height: 300px;
    background-size: 100% 100%;
  `;

  const ChooBoxS = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 10px;
  `;

  const ChooImgS = styled.div`
    height: 250px;
  `;

  const SectionContentS = styled.div`
    padding: 0px;
    margin: 0px;
  `;

  const HomeBoxS = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 10px;
  `;

  const HomeS = styled.div``;

  const HomeImgS = styled.div`
    height: 180px;
  `;

  const HomeInfoS = styled.div``;
  const HomeInfo1S = styled.div``;
  const HomeInfo2S = styled.div`
    color: rgb(68, 66, 66);
  `;
  const HomeInfo3S = styled.div``;

  return (
    <MainS>
      <SectionS>
        <SectionTitleS>에어비앤비 둘러보기</SectionTitleS>
        <CardBoxS>
          <CardS>
            <CardImgS style={{ backgroundImage: "url('images/card1.jpg')" }}>
              사진
            </CardImgS>
            <CardContentS>숙소 및 부티크 호텔</CardContentS>
          </CardS>
          <CardS>
            <CardImgS style={{ backgroundImage: "url('images/card2.jpg')" }}>
              사진
            </CardImgS>
            <CardContentS>트립</CardContentS>
          </CardS>
          <CardS>
            <CardImgS style={{ backgroundImage: "url('images/card3.jpg')" }}>
              사진
            </CardImgS>
            <CardContentS>어드벤처</CardContentS>
          </CardS>
          <CardS>
            <CardImgS style={{ backgroundImage: "url('images/card4.jpg')" }}>
              사진
            </CardImgS>
            <CardContentS>레스토랑</CardContentS>
          </CardS>
        </CardBoxS>
      </SectionS>
      <SectionS>
        <ProS>광고사진</ProS>
      </SectionS>
      <SectionS>
        <SectionTitleS>추천 여행지</SectionTitleS>
        <ChooBoxS>
          <ChooImgS style={{ backgroundImage: "url('images/choo1.png')" }}>
            이미지
          </ChooImgS>
          <ChooImgS style={{ backgroundImage: "url('images/choo2.png')" }}>
            이미지
          </ChooImgS>
          <ChooImgS style={{ backgroundImage: "url('images/choo3.png')" }}>
            이미지
          </ChooImgS>
          <ChooImgS style={{ backgroundImage: "url('images/choo4.png')" }}>
            이미지
          </ChooImgS>
          <ChooImgS style={{ backgroundImage: "url('images/choo5.png')" }}>
            이미지
          </ChooImgS>
        </ChooBoxS>
      </SectionS>
      <SectionS>
        <SectionTitle2S>에어비앤비 플러스를 만나보세요!</SectionTitle2S>
        <SectionContentS>
          퀄리티와 인테리어 디자인이 검증된 숙소 셀렉션
        </SectionContentS>
        <Pro2S>사진</Pro2S>
      </SectionS>
      <SectionS>
        <SectionTitleS>전 세계 숙소</SectionTitleS>
        <HomeBoxS>
          <div class="home">
            <HomeImgS
              style={{ backgroundImage: "url('images/home1.png')" }}
            ></HomeImgS>
            <div class="home__info">
              <div class="info1">오두막 · BALIAN BEACH, BALI</div>
              <HomeInfo2S>BALIAN TREEHOUSE w beautiful pool</HomeInfo2S>
              <div class="info3">
                <span class="star">★★★★★</span>
                <span class="count">185</span>
                <span class="type">슈퍼호스트</span>
              </div>
            </div>
          </div>

          <div class="home">
            <HomeImgS
              style={{ backgroundImage: "url('images/home2.png')" }}
            ></HomeImgS>
            <div class="home__info">
              <div class="info1">키클라데스 주택 · 이아(OIA)</div>
              <HomeInfo2S>Unique Architecture Cave House</HomeInfo2S>
              <div class="info3">
                <span class="star">★★★★★</span>
                <span class="count">188</span>
                <span class="type">슈퍼호스트</span>
              </div>
            </div>
          </div>

          <div class="home">
            <HomeImgS
              style={{ backgroundImage: "url('images/home3.png')" }}
            ></HomeImgS>
            <div class="home__info">
              <div class="info1">성 · 트웬티나인 팜스(TWENTYNINE PALMS)</div>
              <HomeInfo2S>Tile House</HomeInfo2S>
              <div class="info3">
                <span class="star">★★★★★</span>
                <span class="count">367</span>
                <span class="type">슈퍼호스트</span>
              </div>
            </div>
          </div>

          <div class="home">
            <HomeImgS
              style={{ backgroundImage: "url('images/home4.png')" }}
            ></HomeImgS>
            <div class="home__info">
              <div class="info1">검증됨 · 케이프타운</div>
              <HomeInfo2S>
                Modern, Chic Penthouse with Mountain, City & Sea Views
              </HomeInfo2S>
              <div class="info3">
                <span class="star">★★★★★</span>
                <span class="count">177</span>
                <span class="type">슈퍼호스트</span>
              </div>
            </div>
          </div>

          <div class="home">
            <HomeImgS
              style={{ backgroundImage: "url('images/home5.png')" }}
            ></HomeImgS>
            <div class="home__info">
              <div class="info1">아파트 전체 · 마드리드(MADRID)</div>
              <HomeInfo2S>솔광장에 위치한 개인 스튜디오</HomeInfo2S>
              <div class="info3">
                <span class="star">★★★★★</span>
                <span class="count">459</span>
                <span class="type">슈퍼호스트</span>
              </div>
            </div>
          </div>

          <div class="home">
            <HomeImgS
              style={{ backgroundImage: "url('images/home6.png')" }}
            ></HomeImgS>
            <div class="home__info">
              <div class="info1">집 전체 · HUMAC</div>
              <HomeInfo2S>Vacation house in etno-eco village Humac</HomeInfo2S>
              <div class="info3">
                <span class="star">★★★★★</span>
                <span class="count">119</span>
                <span class="type">슈퍼호스트</span>
              </div>
            </div>
          </div>

          <div class="home">
            <HomeImgS
              style={{ backgroundImage: "url('images/home7.png')" }}
            ></HomeImgS>
            <div class="home__info">
              <div class="info1">개인실 · 마라케시</div>
              <HomeInfo2S>The Cozy Palace</HomeInfo2S>
              <div class="info3">
                <span class="star">★★★★★</span>
                <span class="count">559</span>
                <span class="type">슈퍼호스트</span>
              </div>
            </div>
          </div>

          <div class="home">
            <HomeImgS
              style={{ backgroundImage: "url('images/home8.png')" }}
            ></HomeImgS>
            <div class="home__info">
              <div class="info1">게스트용 별채 전체 · 로스앤젤레스</div>
              <HomeInfo2S>Private Pool House with Amazing Views!</HomeInfo2S>
              <div class="info3">
                <span class="star">★★★★★</span>
                <span class="count">170</span>
                <span class="type">슈퍼호스트</span>
              </div>
            </div>
          </div>
        </HomeBoxS>
      </SectionS>
    </MainS>
  );
};

export default Main;
