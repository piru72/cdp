const { getCurrentTimeWithSeconds } = require('../utils/utils.js');
const { updateAcademicSessionDetails,
     getAcademicSessionDetails
    ,validateAcademicSession } = require('../services/academicSession.js');

const reponseVerdicts = require('../constants/response.js');
const responeSummary = require('../constants/response.js');



const updateAcademicSession = async (ctx) => {
    const requestInboundTime = getCurrentTimeWithSeconds();

    
    if (!validateAcademicSession(ctx.request.body.academicSession)) {
        ctx.body = {
            responeSummary: responeSummary.UPDATE_ACADEMIC_SESSION,
            requestInboundTime: requestInboundTime,
            verdict: reponseVerdicts.INVALID_ACADEMIC_SESSION,
            requestOutboundTime: getCurrentTimeWithSeconds(),
        };
        ctx.status = 400;
        return;
    }
    
    try {
        const verdict = await updateAcademicSessionDetails(ctx.request.body.academicSession);
        
        ctx.body = {
            responeSummary: responeSummary.UPDATE_ACADEMIC_SESSION,
            requestInboundTime: requestInboundTime,
            verdict: verdict,
            requestOutboundTime: getCurrentTimeWithSeconds(),
        };
        ctx.status = 201;
    } catch (error) {
        ctx.body = {
            responeSummary: responeSummary.UPDATE_ACADEMIC_SESSION,
            requestInboundTime: requestInboundTime,
            verdict: reponseVerdicts.ERROR_UPDATING_ACADEMIC_SESSION,
            requestOutboundTime: getCurrentTimeWithSeconds(),
        };
        ctx.status = 500; 
    }
};

const getAcademicSession = async(ctx) => {
    const requestInboundTime = getCurrentTimeWithSeconds();

    ctx.body = {
        responeSummary: responeSummary.DETAILS_OF_A_SPECIFIC_ACADEMIC_SESSION,
        requestInboundTime: requestInboundTime,
        requestOutboundTime: getCurrentTimeWithSeconds(),
    };

    const academicSession = await getAcademicSessionDetails(ctx.params.id);
    if (!academicSession) {
        ctx.status = 404;
        ctx.body.verdict = responseVerdicts.ACADEMIC_SESSION_NOT_FOUND;
        return;
    }

    ctx.body.verdict = responseVerdicts.ACADEMIC_SESSION_FOUND;
    ctx.body.academicSession = academicSession;
    ctx.status = 200;
};

module.exports = {
    updateAcademicSession,
    getAcademicSession
};