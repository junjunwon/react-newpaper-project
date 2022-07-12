import { Button } from 'antd'
function Scrab() {
	return (
		<div>
			{scrap.length < 0 ? (
				<div>스크랩 리스트</div>
			) : (
				<>
					<div>저장된 스크랩이 없습니다.</div>
					<Button onClick={history.push('/main')}>스크랩 하러가기</Button>
				</>
			)}
		</div>
	)
}

export default Scrab;