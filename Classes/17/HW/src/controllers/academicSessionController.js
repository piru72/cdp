const { getCurrentTimeWithSeconds } = require('../services/utils.js');
const { updateAcademicSessionDetails,
     getAcademicSessionDetails
    ,validateAcademicSession } = require('../services/academicSessionService.js');



const updateAcademicSession = async (ctx) => {
    const requestInboundTime = getCurrentTimeWithSeconds();

    
    if (!validateAcademicSession(ctx.request.body.academicSession)) {
        ctx.body = {
            responeSummary: 'Update academic session',
            requestInboundTime: requestInboundTime,
            verdict: 'Invalid academic session',
            requestOutboundTime: getCurrentTimeWithSeconds(),
        };
        ctx.status = 400;
        return;
    }
    
    try {
        const verdict = await updateAcademicSessionDetails(ctx.request.body.academicSession);
        
        ctx.body = {
            responeSummary: 'Update academic session',
            requestInboundTime: requestInboundTime,
            verdict: verdict,
            requestOutboundTime: getCurrentTimeWithSeconds(),
        };
        ctx.status = 201;
    } catch (error) {
        ctx.body = {
            responeSummary: 'Update academic session',
            requestInboundTime: requestInboundTime,
            verdict: 'Error updating academic session',
            requestOutboundTime: getCurrentTimeWithSeconds(),
        };
        ctx.status = 500; 
    }
};

const getAcademicSession = async(ctx) => {
    const requestInboundTime = getCurrentTimeWithSeconds();

    ctx.body = {
        responeSummary: 'Details of a specific academic session',
        requestInboundTime: requestInboundTime,
        requestOutboundTime: getCurrentTimeWithSeconds(),
    };

    const academicSession = await getAcademicSessionDetails(ctx.params.id);
    if (!academicSession) {
        ctx.status = 404;
        ctx.body.verdict = "Academic session not found!";
        return;
    }

    ctx.body.verdict = "Academic session found!";
    ctx.body.academicSession = academicSession;
    ctx.status = 200;
};

module.exports = {
    updateAcademicSession,
    getAcademicSession
};