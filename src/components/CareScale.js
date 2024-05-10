function CareScale({scaleValue, careType}){
    const range = [1, 2, 3]
	const scaleType = careType === 'light' ? '☀️' : '💧'
    return(
        <div>
{range.map((ranEle) =>
scaleValue >= ranEle ? <span key={ranEle.toString()}>{scaleType}</span>
				 : null
                )}

        </div>
    )
}
export default CareScale