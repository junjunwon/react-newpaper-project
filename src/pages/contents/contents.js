import {useState, useEffect, useRef} from "react";
import { ContentWrap } from "./contentStyles";
import ContentBox from "../../components/ContentBox"
import axios from "axios";
import {PRIVATE_KEY, URI, SORT} from "../../consts/Consts"
import { useSelector } from "react-redux"
import { Spin, message } from 'antd'
import star from '../../assets/images/star.png'
import starFill from '../../assets/images/starFill.png'

//reducer - state를 업데이트 하는 역할(은행의 예시처럼 꼭 은행(reducer)을 통해 예금해야함.
//dispatch - state 업데이트를 위한 요구
//action - 요구의 내용
function Contents() {

	const CHANGE_COUNTRYNAME = {
		"대한민국": "KOREA",
		"중국": "CHINA",
		"일본": "JAPAN",
		"미국": "USA",
		"러시아": "RUSSIA",
		"프랑스": "FRANCE",
		"영국": "BRITISH"
	}
	//hookuseState
	const [contentArray, setContentArray] = useState([])
	const [pageNumber, setPageNumber] = useState(1)
	const [element, setElement] = useState(null)
	const [loading, setLoading] = useState(false);

	//redux tookit
	const filter = useSelector((state) => state.filter)
	const isSubmited = useSelector((state) => state.filter.isSubmited)

	const onSelectContent = ((e, content) => {
		let scrapedContentList = JSON.parse(localStorage.getItem("scrapedContentList"));
		if(scrapedContentList === null) scrapedContentList = [];

		//즐겨찾기 설정 적용
		if(content.isSave) {
			//누른 컨텐츠랑 리스트에 가고 있는 요소랑 동일한 요가 있우 경우 localStorage 제거, 스타값 변경
			e.target.src=star	
			content.isSave=false
			scrapedContentList = scrapedContentList.filter(object => {
				return object.web_url !== content.web_url; 
			})
			message.warning("스크랩이 해제되었습니다.")
		} else {
			e.target.src=starFill
			content.isSave=true
			scrapedContentList.push(content)
			message.success("스크랩되었습니다.")
		}
	
		localStorage.setItem("scrapedContentList", JSON.stringify(scrapedContentList))
	})

	const observer = useRef(
		new IntersectionObserver(
			entries => {
			const first = entries[0]
			if(first.isIntersecting) {
				loadMore()
			}
		}, {threshold: 0.5})
	)
	useEffect(() => {
		//pageNumber가 변경되면 실행.
		getContents()
	}, [pageNumber])

	useEffect(() => {
		if(contentArray === '' || contentArray === undefined || contentArray === null) return 
		setContentArray([])
		setPageNumber(1)
	},[isSubmited])

	useEffect(() => {
		const currentElement = element
		const currentObserver = observer.current
		
		if(currentElement) {
			currentObserver.observe(currentElement)
		}

		return () => {
			if(currentElement) {
				currentObserver.disconnect()
			}
		}
	}, [element])

	const loadMore = (() => {
		setPageNumber(prev => prev + 1)
	})

	//function
	const getContents = async () => {
		setLoading(true)
		let URL = ''
		let urlDatetime = ''
		let urlHeadline = ''
		let urlNational = ''
		if(filter.datetime !== '') {
			urlDatetime = `begin_date=${filter.datetime.replaceAll('.','')}&end_date=${filter.datetime.replaceAll('.','')}&`
		}
		if(filter.headline !== '') {
			urlHeadline = `fq=headline:(${filter.headline})&`
		}
		if(filter.countries !== '' && filter.countries !== undefined && filter.countries.length > 0) {
			urlNational = 'fq=glocations:('
			for(let i = 0; i<filter.countries.length; i++) {
				urlNational=urlNational.concat(`"${CHANGE_COUNTRYNAME[filter.countries[i]]}",`)
			}
			urlNational=urlNational.slice(0, -1).concat(")&")
		}
		
		if(filter.isSubmited) {
			// URL = `${URI}?page=${pageNumber}&sort=${SORT}&begin_date=${filter.datetime.replaceAll('.','')}&end_date=${filter.datetime.replaceAll('.','')}&fq=headline:(${filter.headline})&api-key=${PRIVATE_KEY}`
			URL = `${URI}?page=${pageNumber}&sort=${SORT}&${urlDatetime}${urlHeadline}${urlNational}api-key=${PRIVATE_KEY}`
		} else {
			URL = `${URI}?&page=${pageNumber}&sort=${SORT}&&api-key=${PRIVATE_KEY}`
		}

			const response = await axios.get(URL)
			if(response.data.response.docs.length > 0) {
				setContentArray([...contentArray, ...response.data.response.docs].map(object => {
					return {
						...object,
						isSave: false
					}
				}))
				
			} 
			setLoading(false)
	}
	return (
		<ContentWrap>
			<div className="spinClass">
				<Spin spinning={loading} size="large" ></Spin>
			</div>
			{				
				contentArray.map((content, index) => {{
						return (
							<div key={index}>
								<ContentBox 
									webUrl={() => window.location.href = content.web_url}
									text={content.headline.main}
									company={content.byline.organization} 
									name={content.byline.original}
									datetime={content.pub_date}
									onClick={(e) => onSelectContent(e, content)}
									isStarFill={star}
							></ContentBox>		
							</div>		
						)
				}})
			}
			<div ref={setElement} style={{background: "transparent", height:"100px"}}></div>	
		</ContentWrap>
	)
}

export default Contents;

