import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const UserSlice = createSlice({
  name: 'user',

  // state

  initialState: {
    company: {},
    loading: 'idle',
    moodQuestions: [],
    questions: []
  },
  reducers: {
    // actions that modify the state

    loading (state) {
      if (state.loading === 'idle') state.loading = 'pending'
    },
    loadMoodQuestions (state, action) {
      state.loading = 'idle'
      state.moodQuestions = action.payload
    },
    loadQuestions (state, action) {
      console.log(action.payload)
      state.loading = 'idle'
      state.questions = action.payload
    },
    setCompany (state, action) {
      console.log(action.payload)
      state.loading = 'idle'
      state.company = action.payload
    }
  }
})

const { actions, reducer } = UserSlice

export const { loading, loadMoodQuestions, loadQuestions, setCompany } = actions

export const loadMoods = () => async dispatch => {
  // start charging
  dispatch(loading())

  // get API data
  const response = await axios.get('api/question/type/1')

  // send API data
  dispatch(
    loadMoodQuestions(response.data.result ? response.data.entities : [])
  )
}

export const loadCompany = () => async dispatch => {
  // start charging
  dispatch(loading())

  // get API data
  const response = await axios.get('api/company')

  // send API data
  dispatch(setCompany(response.data.result ? response.data.entities[0] : []))
}

export const loadAllQuestions = () => async dispatch => {
  // start charging
  dispatch(loading())

  // get API data
  const response = await axios.get('api/question')

  // send API data
  dispatch(
    loadQuestions(
      response.data.result
        ? response.data.entities.filter(
            question => question.idQuestionType !== 1
          )
        : []
    )
  )
}

export default reducer
