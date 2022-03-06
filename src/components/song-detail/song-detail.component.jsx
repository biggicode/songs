import React from "react"
import { connect } from "react-redux"

const SongDetail = (props) => {
  console.log(props)
  return <div>this is song</div>
}

const mapStateToProps = (state) => {
  return { song: state.selectedSong }
}

export default connect(mapStateToProps)(SongDetail)
