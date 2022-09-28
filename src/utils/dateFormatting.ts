const formatDate = (dateString : string) : string  => {
    const cleanDate = dateString.slice(0,10)
    return cleanDate;
}

export default formatDate;