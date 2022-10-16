import notificationService from "./notification.service";

export const suggestedTopicNotification = {
    added: (name, defaultUi = true) =>
        notificationService.success("Suggested Topic", `${name} suggested topic added.`, defaultUi),
    decline: (name, defaultUi = true) =>
        notificationService.error("Suggested Topic", `${name} suggested topic declined.`, defaultUi)
};

export const allTopicNotification = {
    added: (name, defaultUi = true) =>
        notificationService.success("All Topic", `${name} topic has been added.`, defaultUi),
    edited: (name, defaultUi = true) =>
        notificationService.success("All Topic", `${name} topic has been edited.`, defaultUi),
    deleted: (name, defaultUi = true) =>
        notificationService.error("All Topic", `${name} topic has been deleted.`, defaultUi)
};

export const allCategoryNotification = {
    edited: (name, defaultUi = true) =>
        notificationService.success("All Categories", `${name} category has been edited.`, defaultUi),
    deleted: (name, defaultUi = true) =>
        notificationService.error("All Categories", `${name} category has been deleted.`, defaultUi)
};

export const notification = {
    delete: (name, type, defaultUi = true) =>
        notificationService.success(`Delete ${type}`, `${name} has been Deleted.`, defaultUi),
    approve: (name, type, defaultUi = true) =>
        notificationService.success(`Approve ${type}`, `${name} has been Approved.`, defaultUi),
    reject: (name, type, defaultUi = true) =>
        notificationService.success(`Reject ${type}`, `${name} has been Rejected.`, defaultUi),
    activate: (name, defaultUi = true) =>
        notificationService.success("Activate", `${name} was successfully Activated.`, defaultUi),
    inActivate: (name, defaultUi = true) =>
        notificationService.success("Inactivate", `${name} was successfully Inactivated.`, defaultUi),
    dismiss: (name, defaultUi = true) =>
        notificationService.success("Dismiss Report(s)", `Report has been Dismissed.`, defaultUi),
    ban: (user, defaultUi = true) => notificationService.success("Ban User", `${user} has been Banned`, defaultUi),
    Unban: (user, defaultUi = true) =>
        notificationService.success("Unban User", `${user} has been Unbanned`, defaultUi),
    remove: (name, defaultUi = true) =>
        notificationService.success("Remove Content", `${name} has been Removed.`, defaultUi),
    addCategory: (defaultUi = true) =>
        notificationService.success("Add Category", `Category has been added.`, defaultUi),
    addContent: (defaultUi = true) => notificationService.success("Add Content", `Content has been added.`, defaultUi),
    failed: (title, message, defaultUi = true) => notificationService.error(title, message, defaultUi)
};
