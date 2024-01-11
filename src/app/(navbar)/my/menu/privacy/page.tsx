import React from "react";
import InnerSection from "../../_component/InnerSection";
import TermsTemplate from "../_component/TermsTemplate";

const PrivacyPage = () => {
  return (
    <InnerSection text="서비스 이용 약관" backUrl="/my/menu">
      <h1 className="mb-4 p-2.5 bg-pink-transparent rounded-lg text-lg text-black-2 font-semibold">
        LET&apos;S 개인정보처리방침
      </h1>
      <div className="px-3.5 py-4 bg-grey-e/40 rounded-lg">
        {/* 목차 */}
        <article className="mb-10">
          <TermsTemplate
            title="개인정보처리방침의 목차"
            content={
              <>
                1. 개인정보의 처리 목적
                <br />
                2. 개인정보 수집에 대한 동의
                <br />
                3. 개인정보의 처리 및 보유기간
                <br />
                4. 개인정보의 열람, 갱신, 수정 또는 삭제
                <br />
                5. 동의철회 및 파기
                <br />
                6. 개인정보의 제3자 제공 및 위탁에 관한 사항
                <br />
                7. 개인정보보호를 위해 회원들이 알아야 할 사항
                <br />
                8. 자동 수집 장치·운영 및 거부에 관한 사항
                <br />
                9. 행태 정보의 수집·이용·제공 및 거부 등에 관한 사항
                <br />
                10. 링크사이트
                <br />
                11. 개인정보의 안전성 확보 조치
                <br />
                12. 게시물에 포함된 개인정보
                <br />
                13. 개인위치정보의 처리
                <br />
                14. 개인정보관련 의견수렴 및 불만처리에 관한 사항
                <br />
                15. 개인정보 보호책임자 소속, 성명 및 연락처
                <br />
                16. 추가적인 이용·제공 관련 판단 기준
                <br />
                17. 개인정보처리방침의 개정과 그 공지
              </>
            }
          />
        </article>

        <article className="mb-10">
          <TermsTemplate
            title="1. 개인정보의 처리 목적"
            subTitle="(1) 전체회원"
            content={
              <>
                수집 목적 및 항목
                <br />① 이용자 식별 및 본인여부 확인 - 회원가입시 수집 : 성명,
                휴대전화번호, 이메일, 아이디, 비밀번호
                <br />- 본인인증시 수집 : 생년월일, 성별, 아이핀, 연계정보(CI),
                중복가입확인정보(DI)
                <br />② 회원정보관리를 위한 연락 및 안내 - 이메일, 연락처
                <br />③ 만 14세 미만 아동에 대한 법정대리인 동의 확인을 위한
                목적 - 법정대리인의 이름/이메일/휴대전화번호/통신사
                <br />④ 불법∙부정이용방지, 비인가 사용 방지, 안전한 결제 서비스
                제공, 분쟁조정 해결을 위한 기록보존, 상품∙서비스 이용실적 정보를
                활용한 통계∙분석, 상품∙서비스 개선
                <br />
                휴대전화번호, 가상카드번호, 아이디, 이름, 생년월일, 성별, CI,
                DI, IP Address, 방문일시, 서비스 이용기록(자동으로 생성되는
                개인정보), 주소
                <br />⑤ 고객이 주문하신 상품 및 경품 배송을 위한 목적
                <br />- 기본배송지, 연락처, 수취인의 성명/ 전화번호/휴대폰
                번호/배송주소
                <br />⑥ (선택) 계약이행에 대한 연락 및 안내 등의 고지를 위한
                목적, 서비스 판매 정보제공 홍보 가입권유활동 특가상품정보 안내
                등의 고지를 위한 목적
                <br />
                연락처, SMS수신여부, 이메일, 이메일수신여부,
                유선안내(TM)수신여부, 성명, 생년월일, 성별, CI
                <br />⑦ 대금결제서비스 제공용
                <br />
                카드번호, 유효기간, 성명, 생년월일, 성별, 카드비밀번호 앞2자리,
                계약자와의 관계 증빙(타인 명의 카드 이용 시), 은행계좌번호,
                입금자명, 은행명, 휴대전화번호
                <br />⑧ (선택) LET’S의 상품/서비스의 이용 실적 정보 통계/분석 및
                상품/서비스 추천
                <br />
                성별, 생년월일, 휴대폰번호, 전화번호, 이메일
                <br />⑨ 고객 상담 및 민원의 접수 및 처리 결과 안내 목적
                <br />
                연락처, 이메일
                <br />⑩ (선택) 회원님의 편의를 위한 맞춤광고 및 서비스 제공
                <br />
                생년월일, 성별
                <br />⑪ (선택) 경품 제세공과금처리 목적
                <br />
                주민등록번호
                <br />⑫ 여행자보험 가입 목적
                <br />
                성명, 영문성명, 생년월일, 성별, 전화번호, 이메일
                <br />⑬ (선택) 항공사 부가서비스 구매
                <br />
                예약자 및 동반 탑승객 전원의 LET’S 회원번호, 성명, 예약번호,
                여정정보(항공사, 노선정보, 출발일시, 도착지 정보 등), 휴대폰
                번호, 이메일(CS처리용)
                <br />- 예약자는 탑승객의 적법한 동의를 얻어 회사에 해당 정보
                제공해야함
                <br />⑭ 투어 상품 예약 및 상담, 출입국 가능 여부 확인 목적
                <br />
                예약자 정보(성명, 이메일, 휴대전화번호, 일반전화번호)
                <br />- 여행자 정보(성명, 영문성명, 생년월일, 성별, 여권번호,
                여권만료일, 국적, 여권발행국, 여권사본 및 항공운임 할인증빙,
                휴대전화번호, 체류국가, 주소, 우편번호, 현지연락처)
                <br />⑮ 현금영수증 발급 목적
                <br />
                현금영수증카드번호, 휴대전화번호
                <br />⑯ (선택) SNS 이용자 식별 (네이버, 카카오)
                <br />
                성명, 이메일, 성별 : 회원가입 시 수집
              </>
            }
          />
          <TermsTemplate
            subTitle="(2) 위치정보"
            content={
              <>
                ① 수집 목적 : 고객의 위치정보를 이용한 주소검색, 주변 숙박 등의
                검색결과 제공
                <br />② 수집 항목 : 위치정보
                <br />③ 보유 기간 : 수집목적 달성 시 파기
              </>
            }
          />
          <TermsTemplate
            subTitle="(3) 서비스 이용 과정에서 이용자로부터 수집하는 정보는 아래와 같습니다."
            content={
              <>
                서비스 이용 과정에서 부정이용방지, 비인가 사용 방지, 통계 및
                서비스 품질 향상 목적으로 단말기정보(OS, 모델명 등), IP주소,
                쿠키, 서비스 이용 기록(방문일시, 접속기록) 정보가 자동으로
                생성되어 수집될 수 있습니다. 자동으로 생성되어 수집된 정보는
                서비스 제공 기간동안 보유 및 이용하며, 수집 및 이용목적의 달성
                시 파기됩니다.
              </>
            }
          />
        </article>

        <article className="mb-10">
          <TermsTemplate
            title="2. 개인정보 수집에 대한 동의"
            content={
              <>
                회사는 회원님의 개인정보를 처리해야할 경우 필요최소한의 정보만
                수집하며, 처리 내용을 이해하기 쉽도록 안내하고 동의를
                구하겠습니다. 회사는 회원님의 명시적인 동의나 별도 법률에 의해
                필요할 경우에만 개인정보를 처리합니다.
              </>
            }
          />
        </article>

        <article className="mb-10">
          <TermsTemplate
            title="3. 개인정보의 처리 및 보유기간"
            subTitle=""
            content={
              <>
                회사는 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터
                개인정보를 수집시에 동의받은 개인정보 보유·이용기간 내에서
                개인정보를 처리·보유합니다. 각각의 개인정보 처리 및 보유 기간은
                다음과 같습니다.
                <br />
                <br />
                가. 계약 또는 청약철회 등에 관한 기록: 5년
                <br />
                나. 대금결제 및 재화 등의 공급에 관한 기록: 5년
                <br />
                다. 소비자의 불만 또는 분쟁처리에 관한 기록: 3년
                <br />
                라. 표시, 광고에 관한 기록: 6개월
                <br />
                마. 사이트 접속에 관한 기록 : 3개월
                <br />
                바. 특정 금융거래정보 기록: 5년
                <br />
                사. 부정이용 방지를 위한 기록(내부규정) : 7일
              </>
            }
          />
        </article>

        <article className="mb-10">
          <TermsTemplate
            title="4. 개인정보의 열람, 갱신, 수정 또는 삭제"
            content={
              <>
                ① 회원님께서는 언제든지 등록되어 있는 회원님의 개인정보를
                열람하거나 수정하실 수 있습니다. 개인정보 열람 및 정정을 하고자
                할 경우에는 회사 홈페이지 로그인 후 &quot;`마이페이지{">"}
                회원정보수정&quot;`항목을 클릭하여 직접 열람 또는 정정하거나,
                개인정보 보호책임자 및 민원담당자에게 서면, 전화 또는 이메일로
                연락하시면 지체 없이 조치하겠습니다.
                <br />② 회원님께서 직접 권리행사를 하실 수 없는 경우에는
                법정대리인이나 위임을 받은 자 등 대리인을 통하여 하실 수 있으며,
                이 경우 개인정보보호책임자 및 담당자에게 서면, 전화 또는
                E-mail로 연락하시면 지체 없이 조치하겠습니다.
                <br />③ 회원님께서 개인정보의 오류에 대한 정정을 요청한 경우,
                정정을 완료하기 전까지 당해 개인 정보를 이용 또는 제공하지
                않습니다.
                <br />④ 잘못된 개인정보를 제3자에게 이미 제공한 경우에는 정정
                처리결과를 제3자에게 지체 없이 통지하여 정정하도록
                조치하겠습니다.
              </>
            }
          />
        </article>

        <article className="mb-10">
          <TermsTemplate
            title="5. 동의철회 및 파기"
            subTitle=""
            content={
              <>
                ① 회원가입 등을 통한 개인정보의 수집, 이용, 제공에 대하여 회원은
                가입 시 동의한 내용에 대해서 언제든지 철회할 수 있습니다.
                <br />② 동의 철회는 회사의 사이트에 로그인 후, &quot;`회원정보
                {">"}
                회원탈퇴하기&quot;`에서 언제든지 철회할 수 있으며, 개인정보
                민원담당자에게 서면, 전화, 이메일 등으로 연락하시면 신속하게
                개인정보의 삭제 등 필요한 조치를 합니다. 단, 회원ID에 대해서는
                서비스 이용의 혼선 방지, 법령에서 규정하는 회원거래정보의
                보존기간 동안의 보관의무의 이행, 기타 안정적인 서비스 제공을
                위하여 필요한 정보이므로, 탈퇴후 동일 ID로의 재가입은 허용되지
                않습니다.
                <br />③ 회원님이 자발적으로 회원탈퇴한 후 회원 재가입, 임의해지
                등을 반복적으로 행하여 회사가 제공하는 할인쿠폰, 이벤트 혜택
                등으로 경제적 이익을 취하거나 이 과정에서 명의를 무단으로
                사용하는 등 편법과 불법 행위를 하는 회원을 차단하고자 회사는
                회원님의 일부 개인정보를 탈퇴 후 7일이 지난 후 파기 합니다.
                <br />④ 이미 제공된 회원정보를 철회 하는 데는 일정 시간이
                소요되며 소요되는 시간 동안 마케팅에 활용되지 않도록 하겠습니다.
                회사는 회원님의 소중한 정보를 보호하기 위하여 신속하게
                처리되도록 최선의 노력을 다하겠습니다.
                <br />⑤ 회사는 회원님이 계속해서 5년 이상 서비스를 이용하지
                않으실 경우 회원님의 개인정보를 파기합니다.
                <br />⑥ 회사는 회원님으로부터 개인정보를 수집시에 동의받은
                개인정보 보유·이용기간이 경과되는 경우 지체없이 개인정보를 파기
                또는 분리보관 합니다. 파기 시, 물리적 형태로 저장된 개인정보는
                파쇄하거나 소각하며, 전자적 파일 형태로 저장된 개인정보는 기록을
                저장할 수 없는 기술적 방법을 사용하여 삭제합니다.
              </>
            }
          />
        </article>

        <article className="mb-10">
          <TermsTemplate
            title="6. 개인정보의 제3자 제공 및 위탁에 관한 사항"
            content={
              <>
                ① 회사는 회원님의 동의가 있거나 법률의 규정에 의한 경우를
                제외하고는 어떠한 경우에도 회원님의 개인정보를 이용하거나 타인
                또는 타기업, 기관에 제공하지 않습니다.
                <br />② 회사가 제공하는 서비스를 통하여 회원간의 거래관계가
                이루어진 경우, 배송 등 거래이행을 위하여 관련 정보는 필요한
                범위내에서 회원님이 동의한 경우 아래와 같이 거래 당사자에게
                제공합니다.
                <br />
                <br />- 투어
                <br />· 개인정보 제공받는 자 : [업체 리스트]
                <br />· 개인정보 이용 목적 : 청약의사의 확인, 거래이행, 배송,
                고객상담, AS 등 불만 처리, 여행자보험 가입, 결제 및 환불,
                보험금지급 서비스 제공
                <br />· 개인정보 제공 항목 : 성명, 아이디, 주소, 이메일,
                전화번호, 휴대폰번호, 주문정보, 수취인 정보(성명, 전화번호,
                휴대폰번호, 주소), 여권정보, 영문명, 생년월일, 성별
                <br />· 보유 및 이용 기간 : 투어 이용 완료 후 최대2년, 목적달성
                시 까지
                <br />
                <br />
                여행자 보험
                <br />· 개인정보 제공받는 자 : OOO화재해상보험(주)
                <br />· 개인정보 이용 목적 : 여행자보험 가입 및 보험계약 이행,
                관련 안내 및 상담
                <br />· 개인정보 제공 항목 : 예약번호, 여행기간, 여행지역, 이름,
                전화번호, 생일, 성별, 휴대폰번호, 이메일주소
                <br />· 보유 및 이용 기간 : 보험계약의 해지 또는 만료 시까지
                (단, 관계법령의 규정에 의해 보존의 필요가 있는 경우 해당
                보유기간까지)
                <br />
                <br />③ 회사는 위탁계약 체결 시 위탁업무 수행목적 외 개인정보
                처리금지, 기술적·관리적 보호조치, 재위탁 제한, 수탁자에 대한
                관리·감독, 손해배상 등 책임에 관한 사항을 계약서 등 문서에
                명시하고, 수탁자가 개인정보를 안전하게 처리하는지를 감독하고
                있습니다.
                <br />④ 회사가 고객의 개인정보를 제3자에게 제공하는 경우 사전에
                고객에게 고객의 개인정보를 제공받는자, 개인정보를 제공받는 자의
                개인정보 이용목적, 제공하는 개인정보의 항목, 개인정보를 제공받는
                자의 개인정보 보유 및 이용기간에 대해 동의를 구하는 절차를
                거치거나 회원 가입시 별도로 동의를 구하는 절차를 거치게 됩니다.
                고객이 동의하지 않는 경우에는 개인정보를 제공하거나 공유하지
                않습니다. 고객이 개인정보의 제공에 동의하더라도 언제든지 그
                동의를 철회할 수 있습니다.
                <br />⑤ 다음의 경우에는 예외적으로 고객의 동의 없이 개인정보를
                제공할 수 있습니다.
                <br />
                <br />
                가. 법률에 특별한 규정이 있거나 법령상 의무를 준수하기 위하여
                불가피한 경우
                <br />
                나. 정보주체 또는 그 법정대리인이 의사표시를 할 수 없는 상태에
                있거나 주소불명 등으로 사전 동의를 받을 수 없는 경우로서 명백히
                정보주체 또는 제3자의 급박한 생명, 신체, 재산의 이익을 위하여
                필요하다고 인정되는 경우
                <br />
                다. 수집 목적과 합리적인 관련성이 있고 정보주체에게 불이익이
                발생하지 않으며 안전성 확보 조치를 적용한 경우
                <br />- 당초 수집 목적과 관련성
                <br />- 수집 정황 또는 처리 관행에 비춰봤을때 개인정보의
                추가적인 이용∙제공에 대한 예측 가능성
                <br />- 정보주체의 이익 침해 여부
                <br />- 가명처리 또는 암호화 등 안전성 확보에 필요한 조치 적용
                등의 사항을 모두 고려하여 판단
              </>
            }
          />
        </article>

        <article className="mb-10">
          <TermsTemplate
            title="7. 개인정보보호를 위해 회원들이 알아야 할 사항"
            content={
              <>
                회원님의 개인정보를 최신의 상태로 정확하게 입력하여 불의의
                사고를 예방해 주시기 바랍니다. 이용자가 입력한 부정확한 정보로
                인해 발생하는 사고의 책임은 이용자 자신에게 있으며 타인 정보의
                도용 등 허위정보를 입력할 경우 회원자격이 상실될 수 있습니다.
                <br />② 회원님은 개인정보를 보호받을 권리와 함께 스스로를
                보호하고 타인의 정보를 침해하지 않을 의무도 가지고 있습니다.
                비밀번호를 포함한 회원님의 개인정보가 유출되지 않도록 주의하시고
                게시물을 포함한 타인의 개인정보를 훼손하지 않도록 유의해
                주십시오. 만약 이같은 책임을 다하지 못하고 타인의 정보 및
                존엄성을 훼손할 시에는 관련 법률에 의해 처벌받을 수 있습니다.
              </>
            }
          />
        </article>

        <article className="mb-10">
          <TermsTemplate
            title="8. 자동 수집 장치·운영 및 거부에 관한 사항"
            content={
              <>
                ① 회사는 다른 많은 웹사이트와 마찬가지로 쿠키를 운용합니다.
                &apos;쿠키(cookie)&apos;란 이용자의 웹브라우저에 보내는 아주
                작은 텍스트 파일로서 회원님에 대한 정보를 저장하고 수시로
                찾아내는 역할을 합니다.
                <br />② 회원께서 회사의 웹사이트에 접속을 하시면, 회사의
                컴퓨터는 회원님의 브라우저에 있는 쿠키의 내용을 읽고, 회원의
                추가정보를 회원님의 컴퓨터에서 찾아 접속에 따른 성명 등의 추가
                입력 없이 서비스를 제공할 수 있습니다.
                <br />③ 회원께서는 웹브라우저 상단의 도구{">"}인터넷 옵션{">"}
                개인정보 메뉴의 옵션 설정을 통해 쿠키 저장을 거부 할 수
                있습니다. 그러나, 회원님께서 쿠키에 대한 설치를 거부하거나
                삭제로 설정한 경우에는 해당 웹 페이지에 일정부분에 대해서 접근할
                때마다 회원의 경우, 회원님의 아이디(ID)나 비밀번호(password)를
                다시 입력하셔야 하며, 투어 비회원의 경우 본인확인 인증을 다시
                수행하셔야 합니다.
                <br />④ 회사는 이용자의 편의를 위하여 쿠키를 운영합니다. 회원의
                경우 ID를 수집하여 타겟(Target) 마케팅 등의 목적을 위해
                사용되며, 투어 비회원의경우 방문일시, 서비스 이용기록을 이용하여
                추가 본인확인 인증없이 예약내역이나 자동로그인을 하는 등의
                편의를 제공하기 위해 활용됩니다. 쿠키는 브라우저의 종료 시나
                로그아웃 시 만료됩니다.
              </>
            }
          />
        </article>

        <article className="mb-10">
          <TermsTemplate
            title="9. 행태 정보의 수집·이용·제공 및 거부 등에 관한 사항"
            content={
              <>
                ① 행태 정보란, 웹사이트 방문이력, 앱 사용이력, 구매 및 검색이력
                등 이용자의 관심, 흥미, 기호 및 성향 등을 파악하고 분석할 수
                있는 온라인상의 이용자 활동정보를 말합니다.
                <br />② 회사는 아래와 같이 행태정보를 수집 및 이용합니다.
                <br />
                수집하는 행태정보의 항목 : 이용자의 웹/앱 서비스 방문 및 사용
                이력, 검색 이력, 구매 이력, 광고 식별자
                <br />
                행태정보 수집 방법 : 이용자가 서비스 이용 시 로그 정보 분석
                툴(Google Analytics)로 자동 수집
                <br />
                행태정보 수집 목적 : 상품 및 서비스 개발, 상품 및 서비스 개선,
                맞춤형 광고 및 서비스 제공
                <br />
                보유·이용 기간 및 이후 정보처리 방법 : 회원탈퇴 시 까지 보유 및
                이용하며, 보유기간 경과 후 비식별화 조치하여 통계목적으로만 보유
                및 이용
                <br />③ 이용자는 회사의 행태정보 수집 및 이용을 차단할 수 있는
                선택권이 있으며, 다음의 방법으로 차단이 가능합니다.
                <br />※ 모바일 OS버전에 따라 메뉴 및 방법이 다소 상이할 수
                있습니다
                <br />
                <br />
                [웹브라우저]
                <br />- Edge: 설정 {">"} 사이트 권한 {">"} 쿠키 및 사이트 데이터
                <br />- Chrome: 메뉴 {">"} 설정 {">"} 개인정보 및 보안 {">"}{" "}
                쿠키
                <br />- Safari : 설정 {">"} 개인 정보 보호 {">"} 쿠키 및 웹
                사이트 데이터
                <br />
                <br />
                [스마트폰]
                <br />- Android : 설정 {">"} google {">"} 광고 {">"} 광고 ID
                삭제
                <br />- iOS : 설정 {">"} 개인정보보호 및 보안 {">"} 추적 {">"}{" "}
                앱이 추적을 요청하도록 허용 OFF
                <br />
                <br />④ 행태정보 관련 문의 및 피해 구제 방법은 아래와 같습니다.
                <br />
                [민원처리센터]
                <br />- 이메일 : daniel1989@gmail.com
                <br />- 전화번호 : 010-3382-4642
                <br />- 주 소 : 07035 서울특별시 동작구 양녕로22바길 82
              </>
            }
          />
        </article>

        <article className="mb-10">
          <TermsTemplate
            title="10. 링크사이트"
            content={
              <>
                회사는 회원님께 다른 회사 및 관계사의 웹사이트 또는 자료에 대한
                링크를 제공할 수 있습니다. 이 경우 회사는 외부사이트 및 자료에
                대한 아무런 통제권이 없으므로 그것으로부터 제공받는 서비스나
                자료의 유용성에 대해 책임질 수 없으며 보증할 수 없습니다. 회사가
                포함하고 있는 링크를 클릭(click)하여 타 사이트(site)의 페이지로
                옮겨갈 경우 해당 사이트의 개인정보처리방침은 회사와 무관하므로
                새로 방문한 사이트의 방침을 살펴 보시기 바랍니다.
              </>
            }
          />
        </article>

        <article className="mb-10">
          <TermsTemplate
            title="11. 개인정보의 안전성 확보 조치"
            subTitle=""
            content={
              <>
                회사는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고
                있습니다.
                <br />① 관리적 조치 : 정기적 직원 교육 등
                <br />② 기술적 조치 : 개인정보처리시스템 등의 접근권한 관리,
                접근통제시스템 설치, 고유식별정보 등의 암호화, 보안프로그램 설치
                <br />③ 물리적 조치 : 전산실, 자료보관실 등의 접근통제
                <br />
              </>
            }
          />
        </article>

        <article className="mb-10">
          <TermsTemplate
            title="12. 게시물에 포함된 개인정보"
            subTitle=""
            content={
              <>
                회사는 회원님의 게시물을 소중하게 생각하며 변조, 훼손, 삭제되지
                않도록 최선을 다하여 보호합니다.
                <br />
                그러나 다음의 경우에는 명시적 또는 개별적인 경고 후 삭제 조치할
                수 있습니다.
                <br />- 스팸(spam)성 게시물(예; 행운의 편지, 돈 버는 메일 등)
                <br />- 타인을 비방할 목적으로 허위사실을 유포하여 타인의 명예를
                훼손하는 글
                <br />- 동의 없는 타인의 개인정보 공개
                <br />- 제 3자의 저작권 등 권리를 침해하는 내용
                <br />
                회사는 바람직한 게시판 문화를 활성화하고 개인정보를 보호하기
                위하여 동의 없이 타인의 개인정보를 게시한 경우 특정부분을
                삭제하거나 기호 등으로 수정하여 게시할 수 있습니다.
              </>
            }
          />
        </article>

        <article className="mb-10">
          <TermsTemplate
            title="13. 개인위치정보의 처리"
            content={
              <>
                회사는 위치정보의 보호 및 이용 등에 관한 법률을 준수해 이용자의
                개인위치정보를 보호합니다. 개인위치정보 처리에 관한 상세한
                내용은 위치정보 이용약관을 통해 확인 가능합니다.
                <br />① 회사는 개인위치정보주체에게 주소검색, 주변 숙박 등의
                검색결과를 제공할 목적으로 개인위치정보를 이용하고 있으며
                개인위치정보 처리과정에서 위치정보를 시스템에 저장하지 않습니다.
                <br />② 회사는 위치정보의 보호 및 이용 등에 관한 법률 제16조
                제2항에 근거하여 개인위치정보주체에 대한 위치정보 이용ㆍ제공사실
                확인자료를 위치정보시스템에 자동으로 기록하며, 1년간 보관합니다.
                <br />③ 회사는 개인위치정보를 저장하지 않고 있지만 향후 저장 시
                개인위치정보의 처리목적을 달성해 파기가 필요해질 경우 복구 또는
                재생 불가능한 아래와 같은 방법으로 파기하겠습니다.
                <br />가{")"} 종이에 출력된 개인 정보 : 분쇄기로 분쇄하거나 소각
                <br />나{")"} 전자적 파일 형태로 저장된 개인 정보 : 기록을
                재사용할 수 없는 기술적 방법을 사용하여 삭제
                <br />④ 회사는 개인위치정보를 제3자에게 제공하지 않고 있습니다.
                향후 개인위치정보주체가 지정한 제3자에게 제공이 필요한 경우에는
                아래와 같은 조치를 취하겠습니다.
                <br />가{")"} 제공받는 자 및 제공목적을 사전에
                개인위치정보주체에게 고지하고 동의 수령
                <br />나{")"} 개인위치정보를 수집한 당해 통신단말장치로 매회
                개인위치정보주체에게 제공받는 자, 제공일시 및 제공목적 즉시 통지
                <br />다{")"} 개인위치정보주체가 문자, 음성 또는 영상의
                수신기능을 갖추지 아니한 통신단말장치를 사용하거나 별도의
                통신단말장치, 전자우편 또는 전자 메시지로 통보할 것을 미리
                요청한 경우 미리 특정하여 지정한 통신단말장치, 전자우편 또는
                전자 메시지로 통지
                <br />⑤ 회사의 8세 이하 아동 등의 보호의무자의 권리·의무 및 그
                행사방법은 아래와 같습니다.
                <br />가{")"} 회사는 아래의 경우에 해당하는 자(이하 8세 이하의
                아동등이라 한다)의 보호의무자가 8세 이하의 아동 등의 생명 또는
                신체의 보호를 위하여 개인위치정보의 이용 또는 제공에 동의하는
                경우에는 본인의 동의가 있는 것으로 봅니다.
                <br />- 8세 이하의 아동
                <br />- 금치산자
                <br />- 장애인복지법 제2조 제2항 제2호의 규정에 의한 정신적
                장애를 가진 자로서 장애인고용촉진 및 직업재활법 제2조 제2호의
                규정에 의한 중증장애인에 해당하는 자(장애인복지법 제29조의
                규정에 의하여 장애인등록을 한 자에 한한다)
                <br />나{")"} 8세 이하의 아동 등의 생명 또는 신체의 보호를
                위하여 개인위치정보의 이용 또는 제공에 동의를 하고자 하는
                보호의무자는 서면동의서에 보호의무자임을 증명하는 서면을
                첨부하여 회사에 제출하여야 합니다.
                <br />다{")"} 보호의무자는 8세 이하의 아동 등의 개인위치정보
                이용 또는 제공에 동의하는 경우 개인위치정보주체 권리의 전부를
                행사할 수 있습니다.
                <br />⑥ 회사는 위치정보를 보호하고 위치정보 관련 불만을 처리하기
                위해 위치정보 관리책임자를 지정하고 있습니다.
                <br />- 위치정보 관리책임자 : 오종민
                <br />- 전화번호 : 010-3382-4642
                <br />- 이메일 주소 : daniel1989@gmail.com
              </>
            }
          />
        </article>

        <article className="mb-10">
          <TermsTemplate
            title="14. 개인정보관련 의견수렴 및 불만처리에 관한 사항"
            content={
              <>
                ① 회사는 개인정보와 관련된 회원의 의견수렴과 불만처리를 위하여
                회원관리자를 지정해서 해당업무를 수행하도록 합니다.
                <br />② 회사는 회원님의 의견을 소중하게 생각하며, 회원님은
                의문사항으로부터 언제나 성실한 답변을 받을 권리가 있습니다.
                <br />③ 회사는 회원님과의 원활환 의사소통을 위해 민원처리센터를
                운영하고 있으며 연락처는 다음과 같습니다.
                <br />
                <br /> [민원처리센터]
                <br />- 이메일 : daniel1989@gmail.com
                <br />- 전화번호 : 010-3382-4642
                <br />- 주 소 : 07035 서울특별시 동작구 양녕로22바길 82
                <br />④ 전화상담은 평일 09:00 ~ 18:00까지 가능합니다.
                <br />⑤ 이메일이나 팩스 및 우편을 이용한 상담은 접수 후 24시간
                내에 성실하게 답변 드리겠습니다. 다만, 근무시간 이후 또는 주말
                및 공휴일에는 익일 처리하는 것을 원칙으로 합니다.
                <br />⑥ 정보주체는 개인정보침해로 인한 구제를 받기 위하여
                한국인터넷진흥원 개인정보침해신고센터, 개인정보분쟁조정위원회 등
                분쟁해결이나 상담 등을 신청할 수 있습니다. 기타 개인정보에 관한
                상담이 필요한 경우에는 아래 기관에 문의하실 수 있습니다.
                <br />
                <br /> * 개인정보침해신고센터
                <br />- 전화 : (국번없이) 118
                <br />- URL : https://privacy.kisa.or.kr
                <br />* 개인정보분쟁조정위원회
                <br />- 전화 : (국번없이) 1833-6972
                <br />- URL : https://www.kopico.go.kr
                <br />* 경찰청 사이버수사국
                <br />- 전화 : (국번없이) 182
                <br />- URL : https://ecrm.police.go.kr/minwon/main
                <br />* 대검찰청 사이버수사과
                <br />- 전화 : (국번없이) 1301
                <br />- URL : http://www.spo.go.kr
              </>
            }
          />
        </article>

        <article>
          <TermsTemplate
            title="15. 개인정보 보호책임자 소속, 성명 및 연락처"
            content={
              <>
                회사는 회원님께서 양질의 정보를 안전하게 이용하실 수 있도록
                최선을 다하고 있습니다. 개인정보를 보호하는데 있어 회원님께
                고지한 사항들에 반하는 사고가 발생할 시에 개인정보 보호책임자가
                모든 책임을 집니다. 회원님의 개인정보를 처리하는 책임자,
                담당자들은 다음과 같으며 개인정보 관련 문의사항에 신속하고
                성실하게 답변해드리고 있습니다.
                <br /> 개인정보 보호책임자
                <br />- 성명: 오종민
                <br />- 연락처: 010-3382-4642, daniel1989@gmail.com
              </>
            }
          />
        </article>

        <article className="mb-10">
          <TermsTemplate
            title="16. 추가적인 이용·제공 관련 판단 기준"
            content={
              <>
                회사는 법령에 따라 정보주체의 동의없이 개인정보를 추가적으로
                이용 · 제공할 수 있습니다. 정보주체의 동의 없이 추가적인 이용 ·
                제공을 하기 위해서 다음과 같은 사항을 고려하고 있습니다.
                <br />
                <br />- 개인정보를 추가적으로 이용 · 제공하려는 목적이 당초 수집
                목적과 관련성이 있는지 여부
                <br />- 개인정보를 수집한 정황 또는 처리 관행에 비추어 볼 때
                추가적인 이용 · 제공에 대한 예측 가능성이 있는 지 여부
                <br />- 개인정보의 추가적인 이용 · 제공이 정보주체의 이익을
                부당하게 침해하는 지 여부
                <br />- 가명처리 또는 암호화 등 안전성 확보에 필요한 조치를
                하였는 지 여부
              </>
            }
          />
        </article>

        <article className="mb-10">
          <TermsTemplate
            title="17. 개인정보처리방침의 개정과 그 공지"
            content={
              <>
                개인정보처리방침을 변경하는 경우 회사는 홈페이지 내 공지사항을
                통해 공지하고, 회원님께서 언제든지 변경된 사항을 쉽게 알아볼 수
                있도록 조치하겠습니다.
                <br />
                개인정보처리방침 버전번호: v01
                <br />
                개인정보처리방침 공지 일자: 2024-01-01
                <br />
                개인정보처리방침 시행 일자: 2024-01-01
              </>
            }
          />
        </article>
      </div>
    </InnerSection>
  );
};

export default PrivacyPage;
