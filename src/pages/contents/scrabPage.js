import {useEffect, useState} from "react";
import { Button,message } from 'antd'
import { useNavigate } from 'react-router-dom';
import { ContentWrap } from "./contentStyles";
import scrab from '../../assets/images/scrab.png';
import star from '../../assets/images/star.png'
import starFill from '../../assets/images/starFill.png'
import ContentBox from "../../components/ContentBox"

function Scrab() {

	const [scrapList, setScrapList] = useState([])

	useEffect(() => {
		const scrapList = JSON.parse(localStorage.getItem('scrapedContentList'));
		if (scrapList) {
			setScrapList(scrapList);
		}
	}, []);
	
	const navigate = useNavigate();
	const onClickBtn = () => {
		navigate('/react-newpaper-project');
	}

	const onSelectContent = ((e, content) => {
		//즐겨찾기목록에서 제거 -> localStorage delete
		let scrapedContentList = JSON.parse(localStorage.getItem("scrapedContentList"));
		if(scrapedContentList === null) scrapedContentList = [];

		//누른 컨텐츠랑 리스트에 가고 있는 요소랑 동일한 요가 있우 경우 localStorage 제거, 스타값 변경
		
		scrapedContentList = scrapedContentList.filter(object => {
			return object.web_url !== content.web_url; 
		})
		setScrapList(scrapedContentList)
		localStorage.setItem("scrapedContentList", JSON.stringify(scrapedContentList))
		e.target.src=star	
		content.isSave=false
		message.warning("스크랩이 해제되었습니다.")
	})

	return (
		<ContentWrap>
			{
				scrapList.length > 0 ? (
					<div>
						{
							scrapList.map((content, index) => {{
								return (
									<div key={index}>
										<ContentBox 
											webUrl={() => window.location.href = content.web_url}
											text={content.headline.main}
											company={content.byline.organization} 
											name={content.byline.original}
											datetime={content.pub_date}
											onClick={(e) => onSelectContent(e, content)}
											isStarFill={starFill}
									></ContentBox>		
									</div>		
								)
							}})
						}
					</div>
				) : (
					<div className="noScrabClass">
					<img className="scrapImg" src={scrab} alt="image"></img>
					<div>저장된 스크랩이 없습니다.</div>
					<Button onClick={onClickBtn}>스크랩 하러가기</Button>
				</div>
				)
			}
		</ContentWrap>
	)
}

export default Scrab;