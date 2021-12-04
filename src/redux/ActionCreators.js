import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';
import { CAMPSITES } from '../shared/campsites';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { PARTNERS } from '../shared/partners';

/**
 * Redux Action creators
 */

// campsites
export const fetchCampsites = () => dispatch => {
  dispatch(campsitesLoading());

  setTimeout(() => {
    dispatch(addCampsites(CAMPSITES));
  }, 2000);
};

export const campsitesLoading = () => ({
  type: ActionTypes.CAMPSITES_LOADING,
});

export const campsitesFailed = errMess => ({
  type: ActionTypes.CAMPSITES_FAILED,
  payload: errMess,
});

export const addCampsites = campsites => ({
  type: ActionTypes.ADD_CAMPSITES,
  payload: campsites,
});

// comments
export const fetchComments = () => dispatch => {
  setTimeout(() => {
    dispatch(addComments(COMMENTS));
  }, 2000);
};

export const commentsFailed = errMess => ({
  type: ActionTypes.COMMENTS_FAILED,
  payload: errMess,
});

export const addComments = comments => ({
  type: ActionTypes.ADD_COMMENTS,
  payload: comments,
});

export const addComment = comment => ({
  type: ActionTypes.ADD_COMMENT,
  payload: comment,
});

export const postComment = (campsiteId, rating, author, text) => dispatch => {
  const newComment = {
    campsiteId: campsiteId,
    rating: rating,
    author: author,
    text: text,
  };
  newComment.date = new Date().toISOString();

  alert(
    `Thank you for your comment, ${newComment.author}:
Rating: ${newComment.rating}/5
Comment: "${newComment.text}"`
  );
};

// promotions
export const fetchPromotions = () => dispatch => {
  dispatch(promotionsLoading());

  setTimeout(() => {
    dispatch(addPromotions(PROMOTIONS));
  }, 2000);
};

export const promotionsLoading = () => ({
  type: ActionTypes.PROMOTIONS_LOADING,
});

export const promotionsFailed = errMess => ({
  type: ActionTypes.PROMOTIONS_FAILED,
  payload: errMess,
});

export const addPromotions = promotions => ({
  type: ActionTypes.ADD_PROMOTIONS,
  payload: promotions,
});

// partners
export const partnersLoading = () => ({
  type: ActionTypes.PARTNERS_LOADING,
});

export const partnersFailed = errMess => ({
  type: ActionTypes.PARTNERS_FAILED,
  payload: errMess,
});

export const addPartners = partners => ({
  type: ActionTypes.ADD_PARTNERS,
  payload: partners,
});

export const fetchPartners = () => dispatch => {
  dispatch(partnersLoading());

  setTimeout(() => {
    dispatch(addPartners(PARTNERS));
  }, 2000);
};

// feedback
export const postFeedback = (
  firstName,
  lastName,
  phoneNum,
  email,
  agree,
  contactType,
  feedback
) => () => {
  const newFeedback = {
    firstName,
    lastName,
    phoneNum,
    email,
    agree,
    contactType,
    feedback,
  };
  newFeedback.date = new Date().toISOString();

  alert(`Thank you for your feedback, ${newFeedback.firstName}:
Feedback: "${newFeedback.feedback}"`);
};