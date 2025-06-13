"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef } from "react";
import { insightDetailimages } from "../Data/WorksImage";

gsap.registerPlugin(ScrollTrigger);

export default function InsightDetail() {
  const containerRef = useRef(null);

  // 제거된 leftFirstRef, leftSecondRef, leftFifthRef
  const leftThirdRef = useRef(null); // Experience & Projects
  const leftFourthRef = useRef(null); // Other Projects

  // 제거된 rightFirstRef, rightSecondRef, rightFifthRef
  const rightThirdRef = useRef(null); // Experience & Projects 내용
  const rightFourthRef = useRef(null); // Other Projects 내용

  const InsightDetailSecondRef = useRef(null); // 이 Ref는 현재 사용되지 않고 있습니다.

  const imageRef = useRef(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "200% bottom", // 남은 섹션 수에 맞춰 'end' 값 조정 (2개 섹션 전환이므로 200%)
        scrub: true,
        pin: true,
      },
    });

    // Experience & Projects 나타남 -> 사라짐
    tl.fromTo(
      [leftThirdRef.current, rightThirdRef.current],
      { autoAlpha: 0, opacity: 0 },
      { autoAlpha: 1, opacity: 1 }
    ).to([leftThirdRef.current, rightThirdRef.current], {
      opacity: 0,
      display: "none",
    });

    // Other Projects 나타남 (마지막 섹션)
    tl.fromTo(
      [leftFourthRef.current, rightFourthRef.current],
      { autoAlpha: 0, opacity: 0 },
      { autoAlpha: 1, opacity: 1 }
    );
  }, [containerRef]);

  return (
    <section
      ref={containerRef}
      className="h-[120dvh] p-20 font-pretendard font-extralight tracking-tighter bg-[#161616] text-[#FFF7E9]"
    >
      <div className="pt-10">
        <div className="grid grid-cols-6">
          <div className="grid col-span-1">
            <div className="flex flex-col text-white">
              {/* Introduce, Skill, Certification 제거됨 */}

              <div ref={leftThirdRef}>
                <h1 className="text-3xl font-bold mb-3">
                  <span className="uppercase border-b-8">
                    Experience & Projects
                  </span>
                </h1>
              </div>

              <div ref={leftFourthRef}>
                <h1 className="text-3xl font-bold mb-3">
                  <span className="uppercase border-b-8">Other Projects</span>
                </h1>
              </div>

              {/* Certification 제거됨 */}
            </div>
          </div>

          <div
            ref={imageRef}
            className="col-span-2 max-h-[90vh] flex justify-center items-center"
          >
            <div className="sticky top-20">
              <Image
                src={insightDetailimages[0].ImgUrl}
                alt={insightDetailimages[0].alt}
                width={insightDetailimages[0].width}
                height={insightDetailimages[0].height}
                className="rounded-3xl"
              />
            </div>
          </div>

          <div className="col-span-3 ml-20">
            {/* 학력, 경험/활동/교육 (Introduce 내용) 제거됨 */}
            {/* Language, Frameworks 등 (Skill 내용) 제거됨 */}

            <div ref={rightThirdRef}>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <h1 className="text-2xl font-bold">
                    <span>고양이 사료 비교 사이트 &#34;비교하묘&#34;</span>
                  </h1>
                  <div>
                    <p className="h-auto text-sm max-w-prose">
                      - Tanstack query 적용, 데이터 로딩 속도 대폭 향상,
                      사용자에게 빠르고 쾌적한 정보 전달 제공
                    </p>
                    <p className="h-auto text-sm max-w-prose">
                      - 복잡한 사료 성분 데이터를 직관적인 그래픽으로 제공하여
                      누구나 쉽고 빠르게 이해하고 비교 분석 가능
                    </p>
                    <p className="h-auto text-sm max-w-prose">
                      - 사용자들의 가장 중요한 니즈(예: 단백질, 지방, 섬유질
                      등)를 기준으로 사료를 정렬하여 원하는 성분을 우선적으로
                      고려한 사료 선택 가능
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <h1 className="text-2xl font-bold">
                    <span>
                      오프라인 마트 장바구니 관리 플랫폼 &#34;얼만교&#34;
                    </span>
                  </h1>
                  <div>
                    <p className="h-auto text-sm max-w-prose">
                      - OCR 기반 전자가격표시기(ESL) 자동 스캔 및 인식
                    </p>
                    <p className="h-auto text-sm max-w-prose">
                      - 간편하고 빠른 사용자 경험
                    </p>
                    <p className="h-auto text-sm max-w-prose">
                      - 예산 관리 및 가격 정보 시각화
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <h1 className="text-2xl font-bold">
                    <span>잡지형 블로그 &#34;COCONUT.&#34;</span>
                  </h1>
                  <div>
                    <p className="h-auto text-sm max-w-prose">
                      - Firebase Database를 사용하여 블로그 데이터의 안정적인
                      저장 및 관리 가능
                    </p>
                    <p className="h-auto text-sm max-w-prose">
                      - 포스트 작성, 수정, 삭제 등 모든 콘텐츠 관리 작업을
                      간편하게 처리 가능
                    </p>
                    <p className="h-auto text-sm max-w-prose">
                      - Markdown의 다양한 문법을 활용하여 풍부하고 가독성 높은
                      텍스트 스타일 연출 가능
                    </p>
                    <p className="h-auto text-sm max-w-prose">
                      - 글과 함께 사진을 간편하게 업로드하여 블로그 콘텐츠의
                      시각적인 매력과 정보 전달력 향상
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <h1 className="text-2xl font-bold">
                    <span>불법주정차방지 사이트</span>
                  </h1>
                  <div>
                    <p className="h-auto text-sm max-w-prose">
                      - 카카오맵 기반 지도, 현위치 정보 제공 및 실시간 동기화
                    </p>
                    <p className="h-auto text-sm max-w-prose">
                      - 불법주정차 단속 카메라 정보 시각화, 불법주정차 단속
                      카메라 위치를 카카오맵 위에 아이콘으로 표시하여 직관적인
                      정보 제공 불법주정차 단속 카메라 존재 여부를 맵을 통해
                      시각적으로 간편하게 파악 가능
                    </p>
                    <p className="h-auto text-sm max-w-prose">
                      - 주차 상태가 일정 시간 이상 지속될 경우, 브라우저 알림을
                      통해 사용자에게 불법주정차 단속 가능성 경고
                    </p>
                    <p className="h-auto text-sm max-w-prose">
                      - 과거 단속 데이터를 분석하여 불법주정차 단속이 빈번하게
                      발생하는 구간에 대한 통계 정보 제공
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <h1 className="text-2xl font-bold">
                    <span>
                      With Culture: 당신의 문화생활을 위한 Android App
                    </span>
                  </h1>
                  <div>
                    <p className="h-auto text-sm max-w-prose">
                      - KOPIS API를 연동하여 전국 공연 및 전시 정보를
                      업데이트합니다. 장르별, 지역별로 원하는 정보를 쉽고 빠르게
                      탐색할 수 있습니다.
                    </p>
                    <p className="h-auto text-sm max-w-prose">
                      - 관심 있는 공연을 '좋아요'하면, 시작 1일 전 푸시 알림을
                      통해 놓치지 않도록 알려드립니다. 바쁜 일상 속에서도 소중한
                      문화 이벤트를 챙길 수 있게 돕습니다.
                    </p>
                    <p className="h-auto text-sm max-w-prose">
                      - 예정 공연과 현재 진행 중인 공연을 명확히 구분하여
                      보여주며, 사용자 친화적인 인터페이스로 원하는 정보를
                      손쉽게 찾아볼 수 있습니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div ref={rightFourthRef} className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <h1 className="text-2xl font-bold">
                  <span>
                    MicroController를 이용한 실시간 캐리어 물품 관리 모듈 제작
                  </span>
                </h1>
                <div>
                  <p className="h-auto text-sm max-w-prose">
                    - RFID 신호를 가공하여 사용자가 물품을 관리 할 수 있도록
                    GUI를 통해 제공
                  </p>
                  <p className="h-auto text-sm max-w-prose">
                    - 캐리어 내 UHF RFID Reader Module 및 Bluetooth Module을
                    통하여 캐리어 내 물품 실시간 동기화
                  </p>
                  <p className="h-auto text-sm max-w-prose">
                    - Application을 통한 캐리어 내 물품 소지여부 확인 구현
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-2xl font-bold">
                  <span>
                    고령화 건강정보 빅데이터 구축 및 Web-App형 ‘고령화 케어
                    플랫폼’ 개발
                  </span>
                </h1>
                <div>
                  <p className="h-auto text-sm max-w-prose">
                    - 생활패턴 및 식품섭취조사 데이터(국민건강영양조사 제7, 8기)
                    기반 유병 확률 예측 서비스
                  </p>
                  <p className="h-auto text-sm max-w-prose">
                    - YOLOv5를 활용한 음식 탐지 및 유병 확률 기반 식단 평가
                    서비스
                  </p>
                  <p className="h-auto text-sm max-w-prose">
                    -AI를 이용한 서비스의 시각화 및 텍스트화로 사용자에게 정보
                    전달 등
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-2xl font-bold">
                  <span>Point of Sales(POS) System 개발</span>
                </h1>
                <div>
                  <p className="h-auto text-sm max-w-prose">
                    - Java 기반 GUI POS System
                  </p>
                  <p className="h-auto text-sm max-w-prose">
                    - Swing 활용, MySQL 기반 데이터베이스 연동
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-2xl font-bold">
                  <span>
                    산불 예측 모델 및 산불 로그 데이터를 통한 소방서 입지 선정
                    모델 개발
                  </span>
                </h1>
                <div>
                  <p className="h-auto text-sm max-w-prose">
                    - 산불 예측 모델 및 산불 로그 데이터를 통한 소방서 입지 선정
                    모델 개발
                  </p>
                  <p className="h-auto text-sm max-w-prose">
                    - 대용량 데이터 처리를 위한 하둡 클러스터 구축 및
                    데이터베이스 저장
                  </p>
                  <p className="h-auto text-sm max-w-prose">
                    - Geographic Data 기반 위도, 경도 데이터를 통한 시각화
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-2xl font-bold">
                  <span>
                    Tableau를 이용한 FSC, LCC별 항공사 데이터 통계 시각화
                  </span>
                </h1>
                <div>
                  <p className="h-auto text-sm max-w-prose">
                    - 국내 각 항공사별 이용추이, 국내 및 국외노선, 국내 공항
                    이용객수 등을 기반으로 한 분석 및 시각화
                  </p>
                  <p className="h-auto text-sm max-w-prose">
                    - COVID-19 특수, FSC, LCC별 상품판매 Insight 도출
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-2xl font-bold">
                  <span>
                    주요 프랜차이즈 카페 매장별 최적입지 분석, 시각화 및 위치별
                    평점 시각화
                  </span>
                </h1>
                <div>
                  <p className="h-auto text-sm max-w-prose">
                    - Folium, GeoPandas, Matplotlib, Seaborn 활용
                  </p>
                  <p className="h-auto text-sm max-w-prose">
                    - 공공데이터 상권 정보데이터, 전국 읍면동 Polygon file,
                    크롤링을 활용하여 카카오맵 기반 평점 데이터, 유동 인구
                    데이터, 중, 고등학교 위치데이터를 활용하여 분석 및 도출 후
                    시각화
                  </p>
                </div>
              </div>
            </div>
            {/* Certificate 제거됨 */}
          </div>
        </div>
      </div>
    </section>
  );
}
