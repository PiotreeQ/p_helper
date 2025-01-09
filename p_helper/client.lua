local isHelperVisible = false

local function hideHelper()
    if not isHelperVisible then return end
    SendNUIMessage({action = 'hideHelper'})
    SetTimeout(750, function() isHelperVisible = false end)
end

local function showHelper(data)
    if isHelperVisible then
        hideHelper()
        while isHelperVisible do Citizen.Wait(50) end
    end

    isHelperVisible = true
    SendNUIMessage({
        action = 'showHelper',
        info = data
    })
end

exports('showHelper', showHelper)
exports('hideHelper', hideHelper)