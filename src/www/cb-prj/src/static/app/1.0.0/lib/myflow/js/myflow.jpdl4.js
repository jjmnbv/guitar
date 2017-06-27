(function ($, app) {
  var myflow = $.myflow;
  var dict = {
    choice: [
      { "name": "请选择", "value": "" },
      { "name": "是", "value": 1 },
      { "name": "否", "value": 0 }
    ],
    choice2: [
      { "name": "请选择", "value": '' },
      { "name": "允许", "value": 1 },
      { "name": "不允许", "value": 2 }
    ],
    handler: [
      { name: '系统管理员', code: 'admin' }
      , { name: '审核', code: 'shenhe' }
      , { name: '初审', code: 'chushen' }
      , { name: '终审', code: 'zhongshen' }
      , { name: '申请', code: 'shenqing' }
      , { name: '财务审核', code: 'caiwushenhe' }
      , { name: '常小飞', code: '0127' }
      , { name: '贺志超', code: '1200' }
    ],
    position: [
      { name: '审批岗位', code: '50003' }
      , { name: '测试岗位', code: '50006' }
    ]
  }

  $.extend(true, myflow.config.rect, {
    attr: {
      r: 8,
      fill: '#E6F3FF',
      stroke: '#98D2FE',
      "stroke-width": 2
    }
  });

  app.initMyflowConfigPropsProps = function () {
    $.extend(true, myflow.config.props.props, {
      name: {
        name: 'name', label: '流程名称', value: '新建流程', editor: function () {
          return new myflow.editors.inputEditor();
        }
      },
      desc: {
        name: 'desc', label: '流程描述', value: '', editor: function () {
          return new myflow.editors.inputEditor();
        }
      },
      key: {
        name: 'key', label: '流程标识', value: '', editor: function () {
          return new myflow.editors.inputEditor();
        }, value: RandomString(6)
      },
      mainForm: {
        name: 'mainForm', label: '流程主表单', value: '', editor: function () {
          return new myflow.editors.multiSelectEditor(app.fixrelview);
        }
      },
      signal: {
        name: 'signal', label: '流程信号', value: '', readOnly: true, editor: function () {
          return new myflow.editors.inputEditor();
        }, click: function (obj) {
          var signalMangModal = $('#signalmangment-modal');
          signalMangModal.on('show.bs.modal', function (event) {
            var signalMangTemplate = $('#signalmangement-template');
            var templateContent = null;

            if (obj.val()) {
              var contentArr = [];
              var varArr = obj.val().split(';');
              for (var i = 0; i < varArr.length; i++) {
                if (varArr[i] == "") {
                  continue;
                }
                var contentObj = new Object();
                contentObj.signalCode = varArr[i].substring(varArr[i].indexOf('(') + 1, varArr[i].indexOf('|'));
                contentObj.signalScope = varArr[i].substring(varArr[i].indexOf('|') + 1, varArr[i].indexOf(')'));
                contentObj.signalDesc = varArr[i].substring(0, varArr[i].indexOf('('));
                contentArr.push(contentObj);
              }
              templateContent = contentArr;
            }
            var templateData = {
              'content': templateContent
            };
            signalMangModal.find('tbody').html(Handlebars.compile(signalMangTemplate.html())(templateData));
            
            var initEvent = function (object) {
              $('.signal-delete', object).unbind('click').click(function () {
                removeTr($(object), $(this).parents("tr").index());
              });
            };

            initEvent(signalMangModal.find('tbody'));

            $('a.plus', signalMangModal).unbind('click').click(function () {
              addTr($('tbody', signalMangModal), $('#signalmangement-tr-template'), function (newTr, tbody) {
                initEvent(tbody);
              });
            });

            var addTr = function (tbody, template, callback) {
              if ($('tr:eq(0)', tbody).attr('class').indexOf('no-data') != -1) {
                $('tr:eq(0)', tbody).remove();
              }
              var newTr = Handlebars.compile(template.html());
              tbody.append(newTr);
              if (callback) {
                callback($('tr:eq(' + ($('tr', tbody).length - 1) + ')', tbody), tbody);
              }
            };
            var removeTr = function (tbody, trIndex) {
              $('tr:eq(' + trIndex + ')', tbody).remove();
              if ($('tr', tbody).length == 0) {
                $(tbody).html('<tr class="no-data"><td colspan="4" align="center"></td></tr>');
              }
            };
          });
          signalMangModal.on('hidden.bs.modal', function () {
            signalMangModal.find('.modal-body>tbody').empty();
          });
          signalMangModal.modal('show');
          $('.ok', signalMangModal).unbind('click').bind('click', function () {

            var signalText = '';
            app.signal = [];
            for (var i = 0; i < $('#signalmangment-modal tbody tr').length; i++) {
              var signalCode = $('input[name=signalCode]', $("#signalmangment-modal tbody").find("tr").eq(i)).val();
              var signalDesc = $('input[name=signalDesc]', $("#signalmangment-modal tbody").find("tr").eq(i)).val();
              var signalScope = $('select[name=signalScope]', $("#signalmangment-modal tbody").find("tr").eq(i)).val();
              signalText += signalDesc + "(" + signalCode + "|" + signalScope + ")" + ';';
              app.signal.push({'value': signalCode, 'name': signalDesc});
            }
            obj.val(signalText).trigger('change');
            signalMangModal.modal('hide');
          });
        }
      },
      dealDeadline: {
        name: 'dealDeadline', label: '办理期限(天)', value: '', editor: function () {
          return new myflow.editors.inputEditor();
        }
      },
      warningTime: {
        name: 'warningTime', label: '预警时间(00:00~24:00)', value: '', editor: function () {
          return new myflow.editors.inputEditor();
        }
      },
      infoInterval: {
        name: 'infoInterval', label: '通知间隔(小时)', value: '', editor: function () {
          return new myflow.editors.inputEditor();
        }
      },
      infoTime: {
        name: 'infoTime', label: '通知次数', value: '', editor: function () {
          return new myflow.editors.inputEditor();
        }
      },
      overdueDeal: {
        name: 'overdueDeal', label: '过期处理', value: '', editor: function () {
          return new myflow.editors.selectEditor(
            [{ name: '请选择', value: '' }
              , { name: '一直催办', value: 1 }
              , { name: '不处理', value: 2 }
              , { name: '挂起', value: 3 }
            ]);
        }
      },
      allowCommission: {
        name: 'allowCommission', label: '允许代办', value: '', editor: function () {
          return new myflow.editors.selectEditor(
            [{ name: '请选择', value: '' }
              , { name: '允许', value: 1 }
              , { name: '不允许', value: 2 }
            ]);
        }
      },
      allowComplaint: {
        name: 'allowComplaint', label: '允许转办', value: '', editor: function () {
          return new myflow.editors.selectEditor(
            [{ name: '请选择', value: '' }
              , { name: '允许', value: 1 }
              , { name: '不允许', value: 2 }
            ]);
        }
      },
      allowRemove: {
        name: 'allowRemove', label: '允许撤办', value: '', editor: function () {
          return new myflow.editors.selectEditor(
            [{ name: '请选择', value: '' }
              , { name: '允许', value: 1 }
              , { name: '不允许', value: 2 }
            ]);
        }
      },
      allowSendBack: {
        name: 'allowSendBack', label: '允许退回', value: '', editor: function () {
          return new myflow.editors.selectEditor(
            [{ name: '请选择', value: '' }
              , { name: '允许', value: 1 }
              , { name: '不允许', value: 2 }
            ]);
        }
      },
      allowHangup: {
        name: 'allowHangup', label: '允许挂起', value: '', editor: function () {
          return new myflow.editors.selectEditor(
            [{ name: '请选择', value: '' }
              , { name: '允许', value: 1 }
              , { name: '不允许', value: 2 }
            ]);
        }
      },
      allowAwaken: {
        name: 'allowAwaken', label: '允许唤醒', value: '', editor: function () {
          return new myflow.editors.selectEditor(
            [{ name: '请选择', value: '' }
              , { name: '允许', value: 1 }
              , { name: '不允许', value: 2 }
            ]);
        }
      },
      allowUrge: {
        name: 'allowUrge', label: '允许手工催办', value: '', editor: function () {
          return new myflow.editors.selectEditor(
            [{ name: '请选择', value: '' }
              , { name: '允许', value: 1 }
              , { name: '不允许', value: 2 }
            ]);
        }
      },
      runAfterDelete: {
        name: 'runAfterDelete', label: '办后删除', value: '', editor: function () {
          return new myflow.editors.selectEditor(
            [{ name: '请选择', value: '' }
              , { name: '允许', value: 1 }
              , { name: '不允许', value: 2 }
            ]);
        }
      }
    });
  };

  app.initMyflowConfigPropsProps();

  $.extend(true, myflow.config.tools.states, {
    start: {
      showType: 'image',
      type: 'start',
      name: { text: '<<start>>' },
      text: { text: '开始' },
      img: { src: '/static/app/1.0.0/lib/myflow/img/48/start_event_empty.png', width: 48, height: 48 },
      attr: { width: 50, heigth: 50 },
      props: {
        text: {
          name: 'text', label: '名称', value: '', editor: function () {
            return new myflow.editors.textEditor();
          }, value: '开始'
        },
        temp1: {
          name: 'temp1', label: '节点ID', value: '', editor: function () {
            return new myflow.editors.inputEditor();
          }, value: RandomString(6)
        }
      }
    },
    end: {
      showType: 'image', type: 'end',
      name: { text: '<<end>>' },
      text: { text: '结束' },
      img: { src: '/static/app/1.0.0/lib/myflow/img/48/end_event_terminate.png', width: 48, height: 48 },
      attr: { width: 50, heigth: 50 },
      props: {
        text: {
          name: 'text', label: '名称', value: '', editor: function () {
            return new myflow.editors.textEditor();
          }, value: '结束'
        },
        temp1: {
          name: 'temp1', label: '节点ID', value: '', editor: function () {
            return new myflow.editors.inputEditor();
          }, value: RandomString(6)
        }
      }
    },
    'end-cancel': {
      showType: 'image', type: 'end-cancel',
      name: { text: '<<end-cancel>>' },
      text: { text: '取消' },
      img: { src: '/static/app/1.0.0/lib/myflow/img/48/end_event_cancel.png', width: 48, height: 48 },
      attr: { width: 50, heigth: 50 },
      props: {
        text: {
          name: 'text', label: '显示', value: '', editor: function () {
            return new myflow.editors.textEditor();
          }, value: '取消'
        },
        temp1: {
          name: 'temp1', label: '文本', value: '', editor: function () {
            return new myflow.editors.inputEditor();
          }
        },
        temp2: {
          name: 'temp2', label: '选择', value: '', editor: function () {
            return new myflow.editors.selectEditor([{ name: 'aaa', value: 1 }, { name: 'bbb', value: 2 }]);
          }
        }
      }
    },
    'end-error': {
      showType: 'image', type: 'end-error',
      name: { text: '<<end-error>>' },
      text: { text: '错误' },
      img: { src: '/static/app/1.0.0/lib/myflow/img/48/end_event_error.png', width: 48, height: 48 },
      attr: { width: 50, heigth: 50 },
      props: {
        text: {
          name: 'text', label: '显示', value: '', editor: function () {
            return new myflow.editors.textEditor();
          }, value: '错误'
        },
        temp1: {
          name: 'temp1', label: '文本', value: '', editor: function () {
            return new myflow.editors.inputEditor();
          }
        },
        temp2: {
          name: 'temp2', label: '选择', value: '', editor: function () {
            return new myflow.editors.selectEditor([{ name: 'aaa', value: 1 }, { name: 'bbb', value: 2 }]);
          }
        }
      }
    },
    state: {
      showType: 'text', type: 'state',
      name: { text: '<<state>>' },
      text: { text: '状态' },
      img: { src: '/static/app/1.0.0/lib/myflow/img/48/task_empty.png', width: 48, height: 48 },
      props: {
        text: {
          name: 'text', label: '显示', value: '', editor: function () {
            return new myflow.editors.textEditor();
          }, value: '状态'
        },
        temp1: {
          name: 'temp1', label: '文本', value: '', editor: function () {
            return new myflow.editors.inputEditor();
          }
        },
        temp2: {
          name: 'temp2', label: '选择', value: '', editor: function () {
            return new myflow.editors.selectEditor([{ name: 'aaa', value: 1 }, { name: 'bbb', value: 2 }]);
          }
        }
      }
    },
    fork: {
      showType: 'image', type: 'fork',
      name: { text: '<<fork>>' },
      text: { text: '分支' },
      img: { src: '/static/app/1.0.0/lib/myflow/img/48/gateway_parallel.png', width: 48, height: 48 },
      attr: { width: 50, heigth: 50 },
      props: {
        text: {
          name: 'text', label: '显示', value: '分支', editor: function () {
            return new myflow.editors.textEditor();
          }
        },
        temp1: {
          name: 'temp1', label: '文本', value: '', editor: function () {
            return new myflow.editors.inputEditor();
          }
        },
        temp2: {
          name: 'temp2', label: '选择', value: '', editor: function () {
            return new myflow.editors.selectEditor('select.json');
          }
        }
      }
    },
    join: {
      showType: 'image', type: 'join',
      name: { text: '<<join>>' },
      text: { text: '合并' },
      img: { src: '/static/app/1.0.0/lib/myflow/img/48/gateway_parallel.png', width: 48, height: 48 },
      attr: { width: 50, heigth: 50 },
      props: {
        text: {
          name: 'text', label: '显示', value: '合并', editor: function () {
            return new myflow.editors.textEditor();
          }
        },
        temp1: {
          name: 'temp1', label: '文本', value: '', editor: function () {
            return new myflow.editors.inputEditor();
          }
        },
        temp2: {
          name: 'temp2', label: '选择', value: '', editor: function () {
            return new myflow.editors.selectEditor('select.json');
          }
        }
      }
    },
    exclusive_gateway: {
      showType: 'image', type: 'exclusive_gateway',
      name: { text: '<<exclusive_gateway>>' },
      text: { text: '排他网关' },
      img: { src: '/static/app/1.0.0/lib/myflow/img/48/exclusive_gateway.png', width: 48, height: 48 },
      attr: { width: 50, heigth: 50 },
      props: {
        text: {
          name: 'text', label: '名称', value: '排他网关', editor: function () {
            return new myflow.editors.textEditor();
          }
        },
        exclusiveDesc: {
          name: 'exclusiveDesc', label: '描述', value: '', editor: function () {
            return new myflow.editors.inputEditor();
          }
        },
        exclusiveId: {
          name: 'exclusiveId', label: '节点ID', value: '', editor: function () {
            return new myflow.editors.inputEditor();
          }, value: RandomString(6)
        }
      }
    },
    parallel_gateway: {
      showType: 'image', type: 'parallel_gateway',
      name: { text: '<<parallel_gateway>>' },
      text: { text: '并行网关' },
      img: { src: '/static/app/1.0.0/lib/myflow/img/48/parallel_gateway.png', width: 48, height: 48 },
      attr: { width: 50, heigth: 50 },
      props: {
        text: {
          name: 'text', label: '名称', value: '', editor: function () { return new myflow.editors.textEditor(); }, value: '排他网关'
        },
        parallelDesc: {
          name: 'parallelDesc', label: '描述', value: '', editor: function () { return new myflow.editors.inputEditor(); }
        },
        parallelId: {
          name: 'parallelId', label: '节点ID', value: '', editor: function () {
            return new myflow.editors.inputEditor();
          }, value: RandomString(6)
        }
      }
    },
    inclusive_gateway: {
      showType: 'image', type: 'inclusive_gateway',
      name: { text: '<<inclusive_gateway>>' },
      text: { text: '包含网关' },
      img: { src: '/static/app/1.0.0/lib/myflow/img/48/inclusive-gateway.png', width: 48, height: 48 },
      attr: { width: 50, heigth: 50 },
      props: {
        text: {
          name: 'text', label: '名称', value: '包含网关', editor: function () {
            return new myflow.editors.textEditor();
          }
        },
        inclusiveDesc: {
          name: 'inclusiveDesc', label: '描述', value: '', editor: function () {
            return new myflow.editors.inputEditor();
          }
        },
        inclusiveId: {
          name: 'inclusiveId', label: '节点ID', value: '', editor: function () {
            return new myflow.editors.inputEditor();
          }, value: RandomString(6)
        }
      }
    },
    eventbased_gateway: {
      showType: 'image', type: 'eventbased_gateway',
      name: { text: '<<eventbased_gateway>>' },
      text: { text: '事件网关' },
      img: { src: '/static/app/1.0.0/lib/myflow/img/32/event-gateway.png', width: 48, height: 48 },
      attr: { width: 50, heigth: 50 },
      props: {
        text: {
          name: 'text', label: '名称', value: '事件网关', editor: function () {
            return new myflow.editors.textEditor();
          }
        },
        eventbasedDesc: {
          name: 'eventbasedDesc', label: '描述', value: '', editor: function () {
            return new myflow.editors.inputEditor();
          }
        },
        eventGatewayId: {
          name: 'eventGatewayId', label: '节点ID', value: '', editor: function () {
            return new myflow.editors.inputEditor();
          }, value: RandomString(6)
        }
      }
    },
    intermediate_timer_event: {
      showType: 'image', type: 'intermediate_timer_event',
      name: { text: '<<intermediate_timer_event>>' },
      text: { text: '定时事件' },
      img: { src: '/static/app/1.0.0/lib/myflow/img/48/timer-catchevent.png', width: 48, height: 48 },
      attr: { width: 50, heigth: 50 },
      props: {
        text: {
          name: 'text', label: '名称', value: '定时事件', editor: function () {
            return new myflow.editors.textEditor();
          }
        },
        eventDesc: {
          name: 'eventDesc', label: '描述', value: '', editor: function () {
            return new myflow.editors.inputEditor();
          }
        },
        eventId: {
          name: 'eventId', label: '事件ID', value: '', editor: function () {
            return new myflow.editors.inputEditor();
          }, value: RandomString(6)
        },
        timeDuration: {
          name: 'timeDuration', label: '时长(秒)', value: '', editor: function () {
            return new myflow.editors.inputEditor();
          }
        }
      }
    },
    intermediate_signal_event: {
      showType: 'image', type: 'intermediate_signal_event',
      name: { text: '<<intermediate_signal_event>>' },
      text: { text: '信号事件' },
      img: { src: '/static/app/1.0.0/lib/myflow/img/48/signal-catchevent.png', width: 48, height: 48 },
      attr: { width: 50, heigth: 50 },
      props: {
        text: {
          name: 'text', label: '名称', value: '信号事件', editor: function () {
            return new myflow.editors.textEditor();
          }
        },
        eventDesc: {
          name: 'eventDesc', label: '描述', value: '', editor: function () {
            return new myflow.editors.inputEditor();
          }
        },
        eventId: {
          name: 'eventId', label: '事件ID', value: '', editor: function () {
            return new myflow.editors.inputEditor();
          }, value: RandomString(6)
        },
        refSignal: {
          name: 'refSignal', label: '映射信号', value: '', editor: function () {
            return new myflow.editors.selectEditor(app.signal);
          }
        }
      }
    },
    task: {
      showType: 'text', type: 'task',
      name: { text: '<<task>>' },
      text: { text: '任务' },
      img: { src: '/static/app/1.0.0/lib/myflow/img/48/task_empty.png', width: 48, height: 48 },
      props: {
        nodeName: {
          name: 'nodeName', label: '节点名称', value: '任务', editor: function () {
            return new myflow.editors.textEditor();
          }
        },
        nodeDesc: {
          name: 'nodeDesc', label: '节点描述', value: '', editor: function () {
            return new myflow.editors.textEditor();
          }
        },
        nodeId: {
          name: 'nodeId', label: '节点ID', value: '', editor: function () {
            return new myflow.editors.inputEditor();
          }, value: RandomString(6)
        },
        nodeT: {
          name: 'nodeT', label: '节点类型', value: 'USERTASK', editor: function () {
            return new myflow.editors.selectEditor(
              [{ name: '用户任务', value: 'USERTASK' }
                , { name: '服务任务', value: 'SERVICETASK' }]
            );
          }, change: function (selObj) {
            if (selObj.val() == 'SERVICETASK') {
              $('#ptaskName').parents('.form-group').show();
              $('#pisAsyncTask').parents('.form-group').show();
            } else {
              $('input', $('#ptaskName')).val('');
              $('select', $('#pisAsyncTask')).val('');
              $('#ptaskName').parents('.form-group').hide();
              $('#pisAsyncTask').parents('.form-group').hide();
            }
          }
        },
        taskName: {
          name: 'taskName', label: '执行任务', value: '', editor: function () {
            return new myflow.editors.inputEditor();
          }, hide: true
        },
        isAsyncTask: {
          name: 'isAsyncTask', label: '异步执行', value: '', editor: function () {
            return new myflow.editors.selectEditor(dict.choice);
          }, hide: true
        },
        flowTo: {
          name: 'flowTo', label: '节点流向类型', value: '', editor: function () {
            return new myflow.editors.inputEditor();
          }
        },
        nodeForm: {
          name: 'nodeForm', label: '节点表单', value: '', editor: function () {
            return new myflow.editors.multiSelectEditor(app.fixrelview);
          }
        },
        editAuth: {
          name: 'editAuth', label: '编辑权限', value: '', editor: function () {
            return new myflow.editors.selectEditor(
              [{ name: '请选择', value: '' }
                , { name: '只读', value: 1 }
                , { name: '编辑', value: 2 }]
            );
          }
        },
        acceptingOfficer: {
          name: 'acceptingOfficer', label: '办理人员指定', value: '', editor: function () {
            return new myflow.editors.jsTreePanelEditor(app.candidateUsers);
          }, keyType: 'USER', click: function (parentObj, curObj) {
            var treeObj = $('div.jstreeselect', $(parentObj));
            if ($(treeObj).prop('class').indexOf('open') != -1) {
              $(treeObj).removeClass('open');
              $('button.dropdown-toggle', $(treeObj)).prop('aria-expanded', 'false');
              curObj.value = $('input.jstreemultiselect-hidden-input', $(parentObj)).val();
            } else {
              $(treeObj).addClass('open');
              $('button.dropdown-toggle', $(treeObj)).prop('aria-expanded', 'true');
            }
          }
        },
        PostToSpecify: {
          name: 'PostToSpecify', label: '办理岗位指定', value: '', editor: function () {
            return new myflow.editors.multiSelectEditor(app.positions);
          }
        },
        commitStrategy: {
          name: 'commitStrategy', label: '提交策略', value: 'AUTO', editor: function () {
            return new myflow.editors.selectEditor(
              [{ name: '默认', value: 'AUTO' }
                , { name: '回退', value: 'BACK' }]
            );
          }
        },
        commitWay: {
          name: 'commitWay', label: '提交方式', value: 'AUTO', editor: function () {
            return new myflow.editors.selectEditor(
              [{ name: '自动提交', value: 'AUTO' }
                , { name: '手动提交', value: 'MANUAL' }]
            );
          }
        },
        mileStone: {
          name: 'mileStone', label: '里程碑', value: '', editor: function () {
            return new myflow.editors.selectEditor(dict.choice);
          }
        },
        todoInform: {
          name: 'todoInform', label: '待办通知', value: '', editor: function () {
            return new myflow.editors.selectEditor(dict.choice2);
          }
        },
        isAllowTakeBack: {
          name: 'isAllowTakeBack', label: '允许拿回', value: '', editor: function () {
            return new myflow.editors.selectEditor(dict.choice2);
          }
        },
        isAllowTransfer: {
          name: 'isAllowTransfer', label: '允许转办', value: '', editor: function () {
            return new myflow.editors.selectEditor(dict.choice2);
          }
        },
        isAllowReturn: {
          name: 'isAllowReturn', label: '允许退回', value: '', editor: function () {
            return new myflow.editors.selectEditor(dict.choice2);
          }
        },
        isAllowCancel: {
          name: 'isAllowCancel', label: '允许挂起', value: '', editor: function () {
            return new myflow.editors.selectEditor(dict.choice2);
          }, change: function (selObj) {
            if (selObj.val() == '1') {
              $('#pcancelTime').parents('.form-group').show();
              $('#pcancelProcessService').parents('.form-group').show();
              $('#pactiveProcessService').parents('.form-group').show();
            } else {
              $('input', $('#pcancelTime')).val('');
              $('input', $('#pcancelProcessService')).val('');
              $('input', $('#pactiveProcessService')).val('');
              $('#pcancelTime').parents('.form-group').hide();
              $('#pcancelProcessService').parents('.form-group').hide();
              $('#pactiveProcessService').parents('.form-group').hide();
            }
          }
        },
        cancelTime: {
          name: 'cancelTime', label: '挂起时长(秒)', value: '', editor: function () {
            return new myflow.editors.inputEditor();
          }, hide: true
        },
        cancelProcessService: {
          name: 'cancelProcessService', label: '挂起处理', value: '', editor: function () {
            return new myflow.editors.inputEditor();
          }, hide: true
        },
        activeProcessService: {
          name: 'activeProcessService', label: '激活处理', value: '', editor: function () {
            return new myflow.editors.inputEditor();
          }, hide: true
        },
        isAllowRefuse: {
          name: 'isAllowRefuse', label: '允许拒绝', value: '', editor: function () {
            return new myflow.editors.selectEditor(dict.choice2);
          }
        },
        isAllowBackTo: {
          name: 'isAllowBackTo', label: '允许打回', value: '', editor: function () {
            return new myflow.editors.selectEditor(dict.choice2);
          }
        },
        isAllowEndorse: {
          name: 'isAllowEndorse', label: '允许加签', value: '', editor: function () {
            return new myflow.editors.selectEditor(dict.choice2);
          }
        },
        isAllowUrge: {
          name: 'isAllowUrge', label: '手工催办', value: '', editor: function () {
            return new myflow.editors.selectEditor(dict.choice2);
          }
        },
        nodeManageDateLimit: {
          name: 'nodeManageDateLimit', label: '节点办理期限(天)', value: '', editor: function () {
            return new myflow.editors.inputEditor();
          }
        },
        informTimes: {
          name: 'informTimes', label: '通知次数', value: '', editor: function () {
            return new myflow.editors.inputEditor();
          }
        },
        allowExpireDealing: {
          name: 'allowExpireDealing', label: '启动过期处理', value: '', editor: function () {
            return new myflow.editors.selectEditor(
              [{ name: '请选择', value: '' }
                , { name: '一直催办', value: 1 }
                , { name: '不处理', value: 2 }
                , { name: '进入下一环节', value: 3 }
                , { name: '挂起', value: 4 }
              ]);
          }
        },
        expireInterval: {
          name: 'expireInterval', label: '过期间隔', value: '', editor: function () {
            return new myflow.editors.inputEditor();
          }
        },
        expireDealTimes: {
          name: 'expireDealTimes', label: '过期处理次数', value: '', editor: function () {
            return new myflow.editors.inputEditor();
          }
        },
        dividesStrategy: {
          name: 'dividesStrategy', label: '分单策略', value: 'AUTO', editor: function () {
            return new myflow.editors.selectEditor(
              [{ name: '默认', value: 'AUTO' }
                , { name: '平均分单', value: 'AVERAGE' }
                , { name: '自定义', value: 'DIY' }
              ]
            );
          }, change: function (selObj) {
            if (selObj.val() == 'DIY') {
              $('#pdividesService').parents('.form-group').show();
            } else {
              $('select', $('#pdividesService')).val('');
              $('#pdividesService').parents('.form-group').hide();
            }
          }
        },
        dividesService: {
          name: 'dividesService', label: '分单服务', value: '', editor: function () {
            return new myflow.editors.inputEditor();
          }, hide: true
        },
        dealType: {
          name: 'dealType', label: '办理类型', value: '', editor: function () {
            return new myflow.editors.selectEditor(
              [{ name: '请选择', value: '' }
                , { name: '单人顺序办理', value: 1 }
                , { name: '单人竞争办理', value: 2 }
                , { name: '多人顺序办理', value: 3 }
                , { name: '多人并行办理', value: 4 }
              ]
            );
          }
        },
        isSignNode: {
          name: 'isSignNode', label: '是否会签节点', value: '', editor: function () {
            return new myflow.editors.selectEditor(dict.choice);
          }
        },
        signNodeRules: {
          name: 'signNodeRules', label: '会签规则', value: '', editor: function () {
            return new myflow.editors.selectEditor(
              [{ name: '请选择', value: '' }
                , { name: '所有人同意则为通过，若有一个人不同意则为拒绝', value: 1 }
                , { name: '超过二分之一同意为通过，不足或者等于二分之一为拒绝', value: 2 }]
            );
          }
        },
        callSubFlow: {
          name: 'callSubFlow', label: '调用子流程', value: '', editor: function () {
            return new myflow.editors.selectEditor(dict.choice2);
          }
        },
        subFlowSign: {
          name: 'subFlowSign', label: '子流程标记', value: '', editor: function () {
            return new myflow.editors.selectEditor(dict.choice2);
          }
        },
        ccObject: {
          name: 'ccObject', label: '抄送对象', value: '', editor: function () {
            return new myflow.editors.selectEditor(dict.handler);
          }
        },
        dynamicCallClass: {
          name: 'dynamicCallClass', label: '动态调用类', value: '', editor: function () {
            return new myflow.editors.inputEditor();
          }
        },
        methodName: {
          name: 'methodName', label: '方法名', value: '', editor: function () {
            return new myflow.editors.inputEditor();
          }
        },
        isRunScript: {
          name: 'isRunScript', label: '是否运行脚本', value: '', editor: function () {
            return new myflow.editors.selectEditor(dict.choice2);
          }
        },
        runScript: {
          name: 'runScript', label: '运行脚本', value: '', editor: function () {
            return new myflow.editors.inputEditor();
          }, click: function (selObj) {
            var configModal = $('#taskscript-config-modal');
            configModal.on('show.bs.modal', function (event) {
              $('textarea', configModal).val(selObj.val());
            });
            configModal.on('hidden.bs.modal', function () {
              $('textarea', configModal).val('');
            });
            configModal.modal('show');
            $('.ok', configModal).unbind('click').bind('click', function () {
              selObj.val($('textarea[name="scriptcontent"]', configModal).val()).trigger('change');
              configModal.modal('hide');
            });
          }
        },
        runningTime: {
          name: 'runningTime', label: '运行时间', value: '', editor: function () {
            return new myflow.editors.inputEditor();
          }
        },
        relVars: {
          name: 'relVars', label: '关联变量', value: '', editor: function () {
            return new myflow.editors.multiSelectEditor(app.flowVars);
          }
        }
      }
    }
  });

  $.extend(true, myflow.config.path.props, {
    routeId: {
      name: "routeId", label: "路由ID", value: "", editor: function () {
        return new myflow.editors.inputEditor()
      }
    },
    routeName: {
      name: "routeName", label: "路由名称", value: "", editor: function () {
        return new myflow.editors.inputEditor()
      }
    },
    text2: {
      name: "text2", label: "显示", value: "", editor: function () {
        return new myflow.editors.textEditor()
      }
    },
    sourceNode: {
      name: "sourceNode", label: "源节点", value: "", editor: function () {
        return new myflow.editors.inputEditor()
      }
    },
    targetNode: {
      name: "targetNode", label: "目标节点", value: "", editor: function () {
        return new myflow.editors.inputEditor('12341234123')
      }
    },
    dynamicCallClass2: {
      name: 'dynamicCallClass2', label: '动态调用类', value: '', editor: function () {
        return new myflow.editors.inputEditor();
      }
    },
    methodName2: {
      name: 'methodName2', label: '方法名', value: '', editor: function () {
        return new myflow.editors.inputEditor();
      }
    },
    isRunScript2: {
      name: 'isRunScript2', label: '是否运行脚本', value: '', editor: function () {
        return new myflow.editors.selectEditor(dict.choice);
      }
    },
    runScript2: {
      name: 'runScript2', label: '运行脚本', value: '', editor: function () {
        return new myflow.editors.inputEditor();
      }
    },
    routeCondition: {
      name: 'routeCondition', label: '路由条件', value: '', editor: function () {
        return new myflow.editors.inputEditor();
      }
    }
  })
})(jQuery, window.app);