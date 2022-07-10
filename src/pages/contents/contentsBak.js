import React, {useState, useEffect, useReducer, useRef} from "react";
import { ContentWrap } from "./contentStyles";
import ContentBox from "../../components/ContentBox"
import axios from "axios";
import {PRIVATE_KEY} from "../../consts/Consts"


//reducer - state를 업데이트 하는 역할(은행의 예시처럼 꼭 은행(reducer)을 통해 예금해야함.
//dispatch - state 업데이트를 위한 요구
//action - 요구의 내용
function Contents() {

	//state
	const [contentArray, setContentArray] = useState([])
	//page state
	const [pageNumber, setPageNumber] = useState(1)
	//loading sucess /fail
	const [loading, setLoading] = useState(false)

	const [target, setTarget] = useState(null)
	//ref

	const observer = useRef(
		new IntersectionObserver(() => {}, {threshold: 1})
	)

	useEffect(()=> {getContents()}, [pageNumber])

	useEffect(() => {
		let observer;
		if(target) {
			observer =  new IntersectionObserver(onIntersect, {threshold: 0.5})
			observer.observe(target)
		}
		return () => observer && observer.disconnect()
	}, [target])

	//function
	const getContents = async () => {
		const res = await axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?page=${pageNumber}&sort=newest&api-key=3LElvbg68Rv24qIIZ7MV6r3ZrK8p1n4X`)
		setContentArray([...contentArray, ...res.data.response.docs])
	}
	
	const load = (() => {
		setPageNumber(prev => prev + 1)
	})

	const onIntersect = async ([entry], observer)=> {
		if(entry.isIntersecting) {
			observer.unobserve(entry.target)
			await getContents();
			observer.observe(entry.target)
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
			<p ref={setTarget}></p>
		</ContentWrap>
	)
}

export default Contents;

