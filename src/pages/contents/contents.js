import {useState, useEffect, useRef} from "react";
import { ContentWrap } from "./contentStyles";
import ContentBox from "../../components/ContentBox"
import axios from "axios";
import {PRIVATE_KEY, URI, SORT} from "../../consts/Consts"

//reducer - state를 업데이트 하는 역할(은행의 예시처럼 꼭 은행(reducer)을 통해 예금해야함.
//dispatch - state 업데이트를 위한 요구
//action - 요구의 내용
function Contents() {
	//state
	const [contentArray, setContentArray] = useState([])
	//page state
	const [pageNumber, setPageNumber] = useState(1)

	const [element, setElement] = useState(null)

	//적용 예정
	// const [loading, setLoading] = useState(false)
	//ref

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
			const response = await axios.get(`${URI}?page=${pageNumber}&sort=${SORT}&api-key=${PRIVATE_KEY}`)
			if(response.data.response.docs.length > 0) {
				setContentArray([...contentArray, ...response.data.response.docs])	
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

