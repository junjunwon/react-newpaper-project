import {useState, useEffect, useRef} from "react";
import { ContentWrap } from "./contentStyles";
import ContentBox from "../../components/ContentBox"
import axios from "axios";
import {PRIVATE_KEY, URI, SORT} from "../../consts/Consts"
import { useSelector, useDispatch } from "react-redux"
import { setSubmit } from "../../store/slices/FilterSlice"

import star from '../../assets/images/star.png'
import starFill from '../../assets/images/starFill.png'

//reducer - state를 업데이트 하는 역할(은행의 예시처럼 꼭 은행(reducer)을 통해 예금해야함.
//dispatch - state 업데이트를 위한 요구
//action - 요구의 내용
function Contents() {
	
	//hook
	const [contentArray, setContentArray] = useState([])
	const [pageNumber, setPageNumber] = useState(1)
	const [element, setElement] = useState(null)

	//redux tookit
	const filter = useSelector((state) => state.filter)
	const isSubmited = useSelector((state) => state.filter.isSubmited)
	console.log('filter.isSubmited is ', isSubmited)
	const dispatch = useDispatch()

	const onSelectContent = ((e, content) => {
		let scrapedContentList = JSON.parse(localStorage.getItem("scrapedContentList"));
		if(scrapedContentList === null) scrapedContentList = [];


		if(content.isSave) {
			e.target.src=star	
			content.isSave=false
			scrapedContentList = scrapedContentList.filter(object => {
				return object.web_url !== content.web_url; 
			})
		} else {
			e.target.src=starFill
			content.isSave=true

			scrapedContentList.push(content)
		}
		
		// localStorage.setItem("scrapedContent", JSON.stringify(content));
		
		localStorage.setItem("scrapedContentList", JSON.stringify(scrapedContentList))
		console.log(JSON.parse(localStorage.getItem("scrapedContentList")))
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
		dispatch(setSubmit(false))
	}, [pageNumber])

	useEffect(() => {
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
		let URL = ''
		if(filter.isSubmited) {
			URL = `${URI}?q=${filter.headline}&page=${pageNumber}&sort=${SORT}&pub_date=${filter.datetime}&fq=document_type:("article")&api-key=${PRIVATE_KEY}`
		} else {
			URL = `${URI}?&page=${pageNumber}&sort=${SORT}&&api-key=${PRIVATE_KEY}`
		}
		console.log('URL IS ')
		console.log(URL)
		// console.log(`${URI}?q=${filter.headline}&page=${pageNumber}&sort=${SORT}&pub_date=${filter.datetime}&fq=document_type:("article").headline.main&api-key=${PRIVATE_KEY}`)
			const response = await axios.get(URL)
			if(response.data.response.docs.length > 0) {
				// setContentArray([...contentArray, ...response.data.response.docs])	
				setContentArray([...contentArray, ...response.data.response.docs].map(object => {
					let i = 0;
					return {
						...object,
						index : i+1,
						isSave: false
					}
				}))
				console.log(contentArray)
				// setLoading(true)
			} else {
				// setLoading(false)
			}
	}
	return (
		<ContentWrap>
			{				
				contentArray.map((content, index) => {{
						return (
							<div key={index}>
								<ContentBox 
									text={content.headline.main}
									company={content.byline.organization} 
									name={content.byline.original}
									datetime={content.pub_date}
									onClick={(e) => onSelectContent(e, content)}
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

