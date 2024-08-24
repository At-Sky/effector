/* eslint-disable no-unused-vars */
import {createStore, createEvent, sample} from 'effector'
const typecheck = '{global}'
{
  const voidt = createEvent()
  const anyt = createEvent<any>()
  const str = createEvent<string>()
  const num = createEvent<number>()
  const numStr = createEvent<number | string>()
  const strBool = createEvent<string | boolean>()
  describe('no fn', () => {
    test('no fn (should pass)', () => {
      //prettier-ignore
      {
        sample({source:num, target:[num]           })
        sample({source:num, target:[voidt]         })
        sample({source:num, target:[anyt]          })
        sample({source:num, target:[numStr]        })
        sample({source:num, target:[num,voidt]     })
        sample({source:num, target:[anyt,num]      })
        sample({source:num, target:[num,numStr]    })
        sample({source:num, target:[anyt,voidt]    })
        sample({source:num, target:[numStr,voidt]  })
        sample({source:num, target:[anyt,numStr]   })
        sample({source:str, target:[voidt]         })
        sample({source:str, target:[str]           })
        sample({source:str, target:[anyt]          })
        sample({source:str, target:[strBool]       })
        sample({source:str, target:[numStr]        })
        sample({source:str, target:[anyt,voidt]    })
        sample({source:str, target:[strBool,voidt] })
        sample({source:str, target:[numStr,voidt]  })
        sample({source:str, target:[str,voidt]     })
        sample({source:str, target:[anyt,str]      })
        sample({source:str, target:[numStr,str]    })
        sample({source:str, target:[anyt,numStr]   })
        sample({source:str, target:[anyt,strBool]  })
        sample({source:str, target:[numStr,strBool]})
        sample({clock:num, target:[num]           })
        sample({clock:num, target:[voidt]         })
        sample({clock:num, target:[anyt]          })
        sample({clock:num, target:[numStr]        })
        sample({clock:num, target:[num,voidt]     })
        sample({clock:num, target:[anyt,num]      })
        sample({clock:num, target:[num,numStr]    })
        sample({clock:num, target:[anyt,voidt]    })
        sample({clock:num, target:[numStr,voidt]  })
        sample({clock:num, target:[anyt,numStr]   })
        sample({clock:str, target:[voidt]         })
        sample({clock:str, target:[str]           })
        sample({clock:str, target:[anyt]          })
        sample({clock:str, target:[strBool]       })
        sample({clock:str, target:[numStr]        })
        sample({clock:str, target:[anyt,voidt]    })
        sample({clock:str, target:[strBool,voidt] })
        sample({clock:str, target:[numStr,voidt]  })
        sample({clock:str, target:[str,voidt]     })
        sample({clock:str, target:[anyt,str]      })
        sample({clock:str, target:[numStr,str]    })
        sample({clock:str, target:[anyt,numStr]   })
        sample({clock:str, target:[anyt,strBool]  })
        sample({clock:str, target:[numStr,strBool]})
        sample({source:num, clock:num, target:[num]           })
        sample({source:num, clock:num, target:[voidt]         })
        sample({source:num, clock:num, target:[anyt]          })
        sample({source:num, clock:num, target:[numStr]        })
        sample({source:num, clock:num, target:[num,voidt]     })
        sample({source:num, clock:num, target:[anyt,num]      })
        sample({source:num, clock:num, target:[num,numStr]    })
        sample({source:num, clock:num, target:[anyt,voidt]    })
        sample({source:num, clock:num, target:[numStr,voidt]  })
        sample({source:num, clock:num, target:[anyt,numStr]   })
        sample({source:num, clock:str, target:[num]           })
        sample({source:num, clock:str, target:[voidt]         })
        sample({source:num, clock:str, target:[anyt]          })
        sample({source:num, clock:str, target:[numStr]        })
        sample({source:num, clock:str, target:[num,voidt]     })
        sample({source:num, clock:str, target:[anyt,num]      })
        sample({source:num, clock:str, target:[num,numStr]    })
        sample({source:num, clock:str, target:[anyt,voidt]    })
        sample({source:num, clock:str, target:[numStr,voidt]  })
        sample({source:num, clock:str, target:[anyt,numStr]   })
        sample({source:str, clock:num, target:[voidt]         })
        sample({source:str, clock:num, target:[str]           })
        sample({source:str, clock:num, target:[anyt]          })
        sample({source:str, clock:num, target:[strBool]       })
        sample({source:str, clock:num, target:[numStr]        })
        sample({source:str, clock:num, target:[anyt,voidt]    })
        sample({source:str, clock:num, target:[strBool,voidt] })
        sample({source:str, clock:num, target:[numStr,voidt]  })
        sample({source:str, clock:num, target:[str,voidt]     })
        sample({source:str, clock:num, target:[anyt,str]      })
        sample({source:str, clock:num, target:[numStr,str]    })
        sample({source:str, clock:num, target:[anyt,numStr]   })
        sample({source:str, clock:num, target:[anyt,strBool]  })
        sample({source:str, clock:num, target:[numStr,strBool]})
        sample({source:str, clock:str, target:[voidt]         })
        sample({source:str, clock:str, target:[str]           })
        sample({source:str, clock:str, target:[anyt]          })
        sample({source:str, clock:str, target:[strBool]       })
        sample({source:str, clock:str, target:[numStr]        })
        sample({source:str, clock:str, target:[anyt,voidt]    })
        sample({source:str, clock:str, target:[strBool,voidt] })
        sample({source:str, clock:str, target:[numStr,voidt]  })
        sample({source:str, clock:str, target:[str,voidt]     })
        sample({source:str, clock:str, target:[anyt,str]      })
        sample({source:str, clock:str, target:[numStr,str]    })
        sample({source:str, clock:str, target:[anyt,numStr]   })
        sample({source:str, clock:str, target:[anyt,strBool]  })
        sample({source:str, clock:str, target:[numStr,strBool]})
      }
      expect(typecheck).toMatchInlineSnapshot(`
        "
        no errors
        "
      `)
    })
    test('no fn (should fail)', () => {
      //prettier-ignore
      {
        //@ts-expect-error
        sample({source:num, target:[str]           })
        //@ts-expect-error
        sample({source:num, target:[strBool]       })
        //@ts-expect-error
        sample({source:num, target:[num,str]       })
        //@ts-expect-error
        sample({source:num, target:[num,strBool]   })
        //@ts-expect-error
        sample({source:num, target:[strBool,voidt] })
        //@ts-expect-error
        sample({source:num, target:[str,voidt]     })
        //@ts-expect-error
        sample({source:num, target:[anyt,str]      })
        //@ts-expect-error
        sample({source:num, target:[numStr,str]    })
        //@ts-expect-error
        sample({source:num, target:[anyt,strBool]  })
        //@ts-expect-error
        sample({source:num, target:[numStr,strBool]})
        //@ts-expect-error
        sample({source:str, target:[num]           })
        //@ts-expect-error
        sample({source:str, target:[num,voidt]     })
        //@ts-expect-error
        sample({source:str, target:[num,str]       })
        //@ts-expect-error
        sample({source:str, target:[anyt,num]      })
        //@ts-expect-error
        sample({source:str, target:[num,strBool]   })
        //@ts-expect-error
        sample({source:str, target:[num,numStr]    })
        //@ts-expect-error
        sample({clock:num, target:[str]           })
        //@ts-expect-error
        sample({clock:num, target:[strBool]       })
        //@ts-expect-error
        sample({clock:num, target:[num,str]       })
        //@ts-expect-error
        sample({clock:num, target:[num,strBool]   })
        //@ts-expect-error
        sample({clock:num, target:[strBool,voidt] })
        //@ts-expect-error
        sample({clock:num, target:[str,voidt]     })
        //@ts-expect-error
        sample({clock:num, target:[anyt,str]      })
        //@ts-expect-error
        sample({clock:num, target:[numStr,str]    })
        //@ts-expect-error
        sample({clock:num, target:[anyt,strBool]  })
        //@ts-expect-error
        sample({clock:num, target:[numStr,strBool]})
        //@ts-expect-error
        sample({clock:str, target:[num]           })
        //@ts-expect-error
        sample({clock:str, target:[num,voidt]     })
        //@ts-expect-error
        sample({clock:str, target:[num,str]       })
        //@ts-expect-error
        sample({clock:str, target:[anyt,num]      })
        //@ts-expect-error
        sample({clock:str, target:[num,strBool]   })
        //@ts-expect-error
        sample({clock:str, target:[num,numStr]    })
        //@ts-expect-error
        sample({source:num, clock:num, target:[str]           })
        //@ts-expect-error
        sample({source:num, clock:num, target:[strBool]       })
        //@ts-expect-error
        sample({source:num, clock:num, target:[num,str]       })
        //@ts-expect-error
        sample({source:num, clock:num, target:[num,strBool]   })
        //@ts-expect-error
        sample({source:num, clock:num, target:[strBool,voidt] })
        //@ts-expect-error
        sample({source:num, clock:num, target:[str,voidt]     })
        //@ts-expect-error
        sample({source:num, clock:num, target:[anyt,str]      })
        //@ts-expect-error
        sample({source:num, clock:num, target:[numStr,str]    })
        //@ts-expect-error
        sample({source:num, clock:num, target:[anyt,strBool]  })
        //@ts-expect-error
        sample({source:num, clock:num, target:[numStr,strBool]})
        //@ts-expect-error
        sample({source:num, clock:str, target:[str]           })
        //@ts-expect-error
        sample({source:num, clock:str, target:[strBool]       })
        //@ts-expect-error
        sample({source:num, clock:str, target:[num,str]       })
        //@ts-expect-error
        sample({source:num, clock:str, target:[num,strBool]   })
        //@ts-expect-error
        sample({source:num, clock:str, target:[strBool,voidt] })
        //@ts-expect-error
        sample({source:num, clock:str, target:[str,voidt]     })
        //@ts-expect-error
        sample({source:num, clock:str, target:[anyt,str]      })
        //@ts-expect-error
        sample({source:num, clock:str, target:[numStr,str]    })
        //@ts-expect-error
        sample({source:num, clock:str, target:[anyt,strBool]  })
        //@ts-expect-error
        sample({source:num, clock:str, target:[numStr,strBool]})
        //@ts-expect-error
        sample({source:str, clock:num, target:[num]           })
        //@ts-expect-error
        sample({source:str, clock:num, target:[num,voidt]     })
        //@ts-expect-error
        sample({source:str, clock:num, target:[num,str]       })
        //@ts-expect-error
        sample({source:str, clock:num, target:[anyt,num]      })
        //@ts-expect-error
        sample({source:str, clock:num, target:[num,strBool]   })
        //@ts-expect-error
        sample({source:str, clock:num, target:[num,numStr]    })
        //@ts-expect-error
        sample({source:str, clock:str, target:[num]           })
        //@ts-expect-error
        sample({source:str, clock:str, target:[num,voidt]     })
        //@ts-expect-error
        sample({source:str, clock:str, target:[num,str]       })
        //@ts-expect-error
        sample({source:str, clock:str, target:[anyt,num]      })
        //@ts-expect-error
        sample({source:str, clock:str, target:[num,strBool]   })
        //@ts-expect-error
        sample({source:str, clock:str, target:[num,numStr]    })
      }
      expect(typecheck).toMatchInlineSnapshot(`
        "
        Type 'EventCallable<string>' is not assignable to type 'Unit<number>'.
          Types of property '__' are incompatible.
            Type 'string' is not assignable to type 'number'.
        Type 'EventCallable<string | boolean>' is not assignable to type 'Unit<number>'.
          Types of property '__' are incompatible.
            Type 'string | boolean' is not assignable to type 'number'.
              Type 'string' is not assignable to type 'number'.
        Type 'EventCallable<string>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string | boolean>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string | boolean>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<void>' is not assignable to type 'Unit<number>'.
          Types of property '__' are incompatible.
            Type 'void' is not assignable to type 'number'.
        Type 'EventCallable<string>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<void>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string | number>' is not assignable to type 'Unit<number>'.
          Types of property '__' are incompatible.
            Type 'string | number' is not assignable to type 'number'.
              Type 'string' is not assignable to type 'number'.
        Type 'EventCallable<string>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string | boolean>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string | number>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string | boolean>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<string>'.
          Types of property '__' are incompatible.
            Type 'number' is not assignable to type 'string'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<string>'.
        Type 'EventCallable<void>' is not assignable to type 'Unit<string>'.
          Types of property '__' are incompatible.
            Type 'void' is not assignable to type 'string'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<string>'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<string>'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<string>'.
        Type 'EventCallable<string | boolean>' is not assignable to type 'Unit<string>'.
          Types of property '__' are incompatible.
            Type 'string | boolean' is not assignable to type 'string'.
              Type 'boolean' is not assignable to type 'string'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<string>'.
        Type 'EventCallable<string | number>' is not assignable to type 'Unit<string>'.
          Types of property '__' are incompatible.
            Type 'string | number' is not assignable to type 'string'.
              Type 'number' is not assignable to type 'string'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<string>'.
        Type 'EventCallable<string>' is not assignable to type 'UnitTargetable<number>'.
          Types of property '__' are incompatible.
            Type 'string' is not assignable to type 'number'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<string | boolean>'.
          Types of property '__' are incompatible.
            Type 'number' is not assignable to type 'string | boolean'.
        Type 'EventCallable<string | boolean>' is not assignable to type 'UnitTargetable<number>'.
          Types of property '__' are incompatible.
            Type 'string | boolean' is not assignable to type 'number'.
              Type 'string' is not assignable to type 'number'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<string>'.
        Type 'EventCallable<string>' is not assignable to type 'UnitTargetable<number>'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<string | boolean>'.
        Type 'EventCallable<string | boolean>' is not assignable to type 'UnitTargetable<number>'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<string | boolean>'.
        Type 'EventCallable<string | boolean>' is not assignable to type 'UnitTargetable<number>'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<string>'.
        Type 'EventCallable<string>' is not assignable to type 'UnitTargetable<number>'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<string>'.
        Type 'EventCallable<string>' is not assignable to type 'UnitTargetable<number>'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<string>'.
        Type 'EventCallable<string>' is not assignable to type 'UnitTargetable<number>'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<string | boolean>'.
        Type 'EventCallable<string | boolean>' is not assignable to type 'UnitTargetable<number>'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<string | boolean>'.
        Type 'EventCallable<string | boolean>' is not assignable to type 'UnitTargetable<number>'.
        Type 'EventCallable<string>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<number>' is not assignable to type 'UnitTargetable<string>'.
          Types of property '__' are incompatible.
            Type 'number' is not assignable to type 'string'.
        Type 'EventCallable<string>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<number>' is not assignable to type 'UnitTargetable<string>'.
        Type 'EventCallable<string>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<number>' is not assignable to type 'UnitTargetable<string>'.
        Type 'EventCallable<string>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<number>' is not assignable to type 'UnitTargetable<string>'.
        Type 'EventCallable<string>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<number>' is not assignable to type 'UnitTargetable<string>'.
        Type 'EventCallable<string>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<number>' is not assignable to type 'UnitTargetable<string>'.
        Type 'EventCallable<string>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string | boolean>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string | boolean>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string | boolean>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<void>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<void>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string | number>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string | boolean>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string | number>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string | boolean>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string | boolean>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string | boolean>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string | boolean>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<void>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<void>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string | number>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string | boolean>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string | number>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string | boolean>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<string>'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<string>'.
        Type 'EventCallable<void>' is not assignable to type 'Unit<string>'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<string>'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<string>'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<string>'.
        Type 'EventCallable<string | boolean>' is not assignable to type 'Unit<string>'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<string>'.
        Type 'EventCallable<string | number>' is not assignable to type 'Unit<string>'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<string>'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<string>'.
        Type 'EventCallable<void>' is not assignable to type 'Unit<string>'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<string>'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<string>'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<string>'.
        Type 'EventCallable<string | boolean>' is not assignable to type 'Unit<string>'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<string>'.
        Type 'EventCallable<string | number>' is not assignable to type 'Unit<string>'.
        "
      `)
    })
  })
  describe('untyped fn', () => {
    test('untyped fn (should pass)', () => {
      //prettier-ignore
      {
        sample({source:num, target:[num]           , fn:(src) => src + 1      })
        sample({source:num, target:[voidt]         , fn:(src) => src + 1      })
        sample({source:num, target:[anyt]          , fn:(src) => src + 1      })
        sample({source:num, target:[numStr]        , fn:(src) => src + 1      })
        sample({source:num, target:[num,voidt]     , fn:(src) => src + 1      })
        sample({source:num, target:[anyt,num]      , fn:(src) => src + 1      })
        sample({source:num, target:[num,numStr]    , fn:(src) => src + 1      })
        sample({source:num, target:[anyt,voidt]    , fn:(src) => src + 1      })
        sample({source:num, target:[numStr,voidt]  , fn:(src) => src + 1      })
        sample({source:num, target:[anyt,numStr]   , fn:(src) => src + 1      })
        sample({source:str, target:[voidt]         , fn:(src) => src + 1      })
        sample({source:str, target:[str]           , fn:(src) => src + 1      })
        sample({source:str, target:[anyt]          , fn:(src) => src + 1      })
        sample({source:str, target:[strBool]       , fn:(src) => src + 1      })
        sample({source:str, target:[numStr]        , fn:(src) => src + 1      })
        sample({source:str, target:[anyt,voidt]    , fn:(src) => src + 1      })
        sample({source:str, target:[strBool,voidt] , fn:(src) => src + 1      })
        sample({source:str, target:[numStr,voidt]  , fn:(src) => src + 1      })
        sample({source:str, target:[str,voidt]     , fn:(src) => src + 1      })
        sample({source:str, target:[anyt,str]      , fn:(src) => src + 1      })
        sample({source:str, target:[numStr,str]    , fn:(src) => src + 1      })
        sample({source:str, target:[anyt,numStr]   , fn:(src) => src + 1      })
        sample({source:str, target:[anyt,strBool]  , fn:(src) => src + 1      })
        sample({source:str, target:[numStr,strBool], fn:(src) => src + 1      })
        sample({clock:num, target:[num]           , fn:(clk) => clk + 1      })
        sample({clock:num, target:[voidt]         , fn:(clk) => clk + 1      })
        sample({clock:num, target:[anyt]          , fn:(clk) => clk + 1      })
        sample({clock:num, target:[numStr]        , fn:(clk) => clk + 1      })
        sample({clock:num, target:[num,voidt]     , fn:(clk) => clk + 1      })
        sample({clock:num, target:[anyt,num]      , fn:(clk) => clk + 1      })
        sample({clock:num, target:[num,numStr]    , fn:(clk) => clk + 1      })
        sample({clock:num, target:[anyt,voidt]    , fn:(clk) => clk + 1      })
        sample({clock:num, target:[numStr,voidt]  , fn:(clk) => clk + 1      })
        sample({clock:num, target:[anyt,numStr]   , fn:(clk) => clk + 1      })
        sample({clock:str, target:[voidt]         , fn:(clk) => clk + 1      })
        sample({clock:str, target:[str]           , fn:(clk) => clk + 1      })
        sample({clock:str, target:[anyt]          , fn:(clk) => clk + 1      })
        sample({clock:str, target:[strBool]       , fn:(clk) => clk + 1      })
        sample({clock:str, target:[numStr]        , fn:(clk) => clk + 1      })
        sample({clock:str, target:[anyt,voidt]    , fn:(clk) => clk + 1      })
        sample({clock:str, target:[strBool,voidt] , fn:(clk) => clk + 1      })
        sample({clock:str, target:[numStr,voidt]  , fn:(clk) => clk + 1      })
        sample({clock:str, target:[str,voidt]     , fn:(clk) => clk + 1      })
        sample({clock:str, target:[anyt,str]      , fn:(clk) => clk + 1      })
        sample({clock:str, target:[numStr,str]    , fn:(clk) => clk + 1      })
        sample({clock:str, target:[anyt,numStr]   , fn:(clk) => clk + 1      })
        sample({clock:str, target:[anyt,strBool]  , fn:(clk) => clk + 1      })
        sample({clock:str, target:[numStr,strBool], fn:(clk) => clk + 1      })
        sample({source:num, clock:num, target:[num]           , fn:(src,clk) => src + clk})
        sample({source:num, clock:num, target:[voidt]         , fn:(src,clk) => src + clk})
        sample({source:num, clock:num, target:[anyt]          , fn:(src,clk) => src + clk})
        sample({source:num, clock:num, target:[numStr]        , fn:(src,clk) => src + clk})
        sample({source:num, clock:num, target:[num,voidt]     , fn:(src,clk) => src + clk})
        sample({source:num, clock:num, target:[anyt,num]      , fn:(src,clk) => src + clk})
        sample({source:num, clock:num, target:[num,numStr]    , fn:(src,clk) => src + clk})
        sample({source:num, clock:num, target:[anyt,voidt]    , fn:(src,clk) => src + clk})
        sample({source:num, clock:num, target:[numStr,voidt]  , fn:(src,clk) => src + clk})
        sample({source:num, clock:num, target:[anyt,numStr]   , fn:(src,clk) => src + clk})
        sample({source:num, clock:str, target:[voidt]         , fn:(src,clk) => src + clk})
        sample({source:num, clock:str, target:[str]           , fn:(src,clk) => src + clk})
        sample({source:num, clock:str, target:[anyt]          , fn:(src,clk) => src + clk})
        sample({source:num, clock:str, target:[strBool]       , fn:(src,clk) => src + clk})
        sample({source:num, clock:str, target:[numStr]        , fn:(src,clk) => src + clk})
        sample({source:num, clock:str, target:[anyt,voidt]    , fn:(src,clk) => src + clk})
        sample({source:num, clock:str, target:[strBool,voidt] , fn:(src,clk) => src + clk})
        sample({source:num, clock:str, target:[numStr,voidt]  , fn:(src,clk) => src + clk})
        sample({source:num, clock:str, target:[str,voidt]     , fn:(src,clk) => src + clk})
        sample({source:num, clock:str, target:[anyt,str]      , fn:(src,clk) => src + clk})
        sample({source:num, clock:str, target:[numStr,str]    , fn:(src,clk) => src + clk})
        sample({source:num, clock:str, target:[anyt,numStr]   , fn:(src,clk) => src + clk})
        sample({source:num, clock:str, target:[anyt,strBool]  , fn:(src,clk) => src + clk})
        sample({source:num, clock:str, target:[numStr,strBool], fn:(src,clk) => src + clk})
        sample({source:str, clock:num, target:[voidt]         , fn:(src,clk) => src + clk})
        sample({source:str, clock:num, target:[str]           , fn:(src,clk) => src + clk})
        sample({source:str, clock:num, target:[anyt]          , fn:(src,clk) => src + clk})
        sample({source:str, clock:num, target:[strBool]       , fn:(src,clk) => src + clk})
        sample({source:str, clock:num, target:[numStr]        , fn:(src,clk) => src + clk})
        sample({source:str, clock:num, target:[anyt,voidt]    , fn:(src,clk) => src + clk})
        sample({source:str, clock:num, target:[strBool,voidt] , fn:(src,clk) => src + clk})
        sample({source:str, clock:num, target:[numStr,voidt]  , fn:(src,clk) => src + clk})
        sample({source:str, clock:num, target:[str,voidt]     , fn:(src,clk) => src + clk})
        sample({source:str, clock:num, target:[anyt,str]      , fn:(src,clk) => src + clk})
        sample({source:str, clock:num, target:[numStr,str]    , fn:(src,clk) => src + clk})
        sample({source:str, clock:num, target:[anyt,numStr]   , fn:(src,clk) => src + clk})
        sample({source:str, clock:num, target:[anyt,strBool]  , fn:(src,clk) => src + clk})
        sample({source:str, clock:num, target:[numStr,strBool], fn:(src,clk) => src + clk})
        sample({source:str, clock:str, target:[voidt]         , fn:(src,clk) => src + clk})
        sample({source:str, clock:str, target:[str]           , fn:(src,clk) => src + clk})
        sample({source:str, clock:str, target:[anyt]          , fn:(src,clk) => src + clk})
        sample({source:str, clock:str, target:[strBool]       , fn:(src,clk) => src + clk})
        sample({source:str, clock:str, target:[numStr]        , fn:(src,clk) => src + clk})
        sample({source:str, clock:str, target:[anyt,voidt]    , fn:(src,clk) => src + clk})
        sample({source:str, clock:str, target:[strBool,voidt] , fn:(src,clk) => src + clk})
        sample({source:str, clock:str, target:[numStr,voidt]  , fn:(src,clk) => src + clk})
        sample({source:str, clock:str, target:[str,voidt]     , fn:(src,clk) => src + clk})
        sample({source:str, clock:str, target:[anyt,str]      , fn:(src,clk) => src + clk})
        sample({source:str, clock:str, target:[numStr,str]    , fn:(src,clk) => src + clk})
        sample({source:str, clock:str, target:[anyt,numStr]   , fn:(src,clk) => src + clk})
        sample({source:str, clock:str, target:[anyt,strBool]  , fn:(src,clk) => src + clk})
        sample({source:str, clock:str, target:[numStr,strBool], fn:(src,clk) => src + clk})
      }
      expect(typecheck).toMatchInlineSnapshot(`
        "
        no errors
        "
      `)
    })
    test('untyped fn (should fail)', () => {
      //prettier-ignore
      {
        //@ts-expect-error
        sample({source:num, target:[str]           , fn:(src) => src + 1      })
        //@ts-expect-error
        sample({source:num, target:[strBool]       , fn:(src) => src + 1      })
        //@ts-expect-error
        sample({source:num, target:[num,str]       , fn:(src) => src + 1      })
        //@ts-expect-error
        sample({source:num, target:[num,strBool]   , fn:(src) => src + 1      })
        //@ts-expect-error
        sample({source:num, target:[strBool,voidt] , fn:(src) => src + 1      })
        //@ts-expect-error
        sample({source:num, target:[str,voidt]     , fn:(src) => src + 1      })
        //@ts-expect-error
        sample({source:num, target:[anyt,str]      , fn:(src) => src + 1      })
        //@ts-expect-error
        sample({source:num, target:[numStr,str]    , fn:(src) => src + 1      })
        //@ts-expect-error
        sample({source:num, target:[anyt,strBool]  , fn:(src) => src + 1      })
        //@ts-expect-error
        sample({source:num, target:[numStr,strBool], fn:(src) => src + 1      })
        //@ts-expect-error
        sample({source:str, target:[num]           , fn:(src) => src + 1      })
        //@ts-expect-error
        sample({source:str, target:[num,voidt]     , fn:(src) => src + 1      })
        //@ts-expect-error
        sample({source:str, target:[num,str]       , fn:(src) => src + 1      })
        //@ts-expect-error
        sample({source:str, target:[anyt,num]      , fn:(src) => src + 1      })
        //@ts-expect-error
        sample({source:str, target:[num,strBool]   , fn:(src) => src + 1      })
        //@ts-expect-error
        sample({source:str, target:[num,numStr]    , fn:(src) => src + 1      })
        //@ts-expect-error
        sample({clock:num, target:[str]           , fn:(clk) => clk + 1      })
        //@ts-expect-error
        sample({clock:num, target:[strBool]       , fn:(clk) => clk + 1      })
        //@ts-expect-error
        sample({clock:num, target:[num,str]       , fn:(clk) => clk + 1      })
        //@ts-expect-error
        sample({clock:num, target:[num,strBool]   , fn:(clk) => clk + 1      })
        //@ts-expect-error
        sample({clock:num, target:[strBool,voidt] , fn:(clk) => clk + 1      })
        //@ts-expect-error
        sample({clock:num, target:[str,voidt]     , fn:(clk) => clk + 1      })
        //@ts-expect-error
        sample({clock:num, target:[anyt,str]      , fn:(clk) => clk + 1      })
        //@ts-expect-error
        sample({clock:num, target:[numStr,str]    , fn:(clk) => clk + 1      })
        //@ts-expect-error
        sample({clock:num, target:[anyt,strBool]  , fn:(clk) => clk + 1      })
        //@ts-expect-error
        sample({clock:num, target:[numStr,strBool], fn:(clk) => clk + 1      })
        //@ts-expect-error
        sample({clock:str, target:[num]           , fn:(clk) => clk + 1      })
        //@ts-expect-error
        sample({clock:str, target:[num,voidt]     , fn:(clk) => clk + 1      })
        //@ts-expect-error
        sample({clock:str, target:[num,str]       , fn:(clk) => clk + 1      })
        //@ts-expect-error
        sample({clock:str, target:[anyt,num]      , fn:(clk) => clk + 1      })
        //@ts-expect-error
        sample({clock:str, target:[num,strBool]   , fn:(clk) => clk + 1      })
        //@ts-expect-error
        sample({clock:str, target:[num,numStr]    , fn:(clk) => clk + 1      })
        //@ts-expect-error
        sample({source:num, clock:num, target:[str]           , fn:(src,clk) => src + clk})
        //@ts-expect-error
        sample({source:num, clock:num, target:[strBool]       , fn:(src,clk) => src + clk})
        //@ts-expect-error
        sample({source:num, clock:num, target:[num,str]       , fn:(src,clk) => src + clk})
        //@ts-expect-error
        sample({source:num, clock:num, target:[num,strBool]   , fn:(src,clk) => src + clk})
        //@ts-expect-error
        sample({source:num, clock:num, target:[strBool,voidt] , fn:(src,clk) => src + clk})
        //@ts-expect-error
        sample({source:num, clock:num, target:[str,voidt]     , fn:(src,clk) => src + clk})
        //@ts-expect-error
        sample({source:num, clock:num, target:[anyt,str]      , fn:(src,clk) => src + clk})
        //@ts-expect-error
        sample({source:num, clock:num, target:[numStr,str]    , fn:(src,clk) => src + clk})
        //@ts-expect-error
        sample({source:num, clock:num, target:[anyt,strBool]  , fn:(src,clk) => src + clk})
        //@ts-expect-error
        sample({source:num, clock:num, target:[numStr,strBool], fn:(src,clk) => src + clk})
        //@ts-expect-error
        sample({source:num, clock:str, target:[num]           , fn:(src,clk) => src + clk})
        //@ts-expect-error
        sample({source:num, clock:str, target:[num,voidt]     , fn:(src,clk) => src + clk})
        //@ts-expect-error
        sample({source:num, clock:str, target:[num,str]       , fn:(src,clk) => src + clk})
        //@ts-expect-error
        sample({source:num, clock:str, target:[anyt,num]      , fn:(src,clk) => src + clk})
        //@ts-expect-error
        sample({source:num, clock:str, target:[num,strBool]   , fn:(src,clk) => src + clk})
        //@ts-expect-error
        sample({source:num, clock:str, target:[num,numStr]    , fn:(src,clk) => src + clk})
        //@ts-expect-error
        sample({source:str, clock:num, target:[num]           , fn:(src,clk) => src + clk})
        //@ts-expect-error
        sample({source:str, clock:num, target:[num,voidt]     , fn:(src,clk) => src + clk})
        //@ts-expect-error
        sample({source:str, clock:num, target:[num,str]       , fn:(src,clk) => src + clk})
        //@ts-expect-error
        sample({source:str, clock:num, target:[anyt,num]      , fn:(src,clk) => src + clk})
        //@ts-expect-error
        sample({source:str, clock:num, target:[num,strBool]   , fn:(src,clk) => src + clk})
        //@ts-expect-error
        sample({source:str, clock:num, target:[num,numStr]    , fn:(src,clk) => src + clk})
        //@ts-expect-error
        sample({source:str, clock:str, target:[num]           , fn:(src,clk) => src + clk})
        //@ts-expect-error
        sample({source:str, clock:str, target:[num,voidt]     , fn:(src,clk) => src + clk})
        //@ts-expect-error
        sample({source:str, clock:str, target:[num,str]       , fn:(src,clk) => src + clk})
        //@ts-expect-error
        sample({source:str, clock:str, target:[anyt,num]      , fn:(src,clk) => src + clk})
        //@ts-expect-error
        sample({source:str, clock:str, target:[num,strBool]   , fn:(src,clk) => src + clk})
        //@ts-expect-error
        sample({source:str, clock:str, target:[num,numStr]    , fn:(src,clk) => src + clk})
      }
      expect(typecheck).toMatchInlineSnapshot(`
        "
        Type 'EventCallable<string>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string | boolean>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string | boolean>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string | boolean>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<void>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<void>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string | number>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string | boolean>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string | number>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string | boolean>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<string>'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<string>'.
        Type 'EventCallable<void>' is not assignable to type 'Unit<string>'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<string>'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<string>'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<string>'.
        Type 'EventCallable<string | boolean>' is not assignable to type 'Unit<string>'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<string>'.
        Type 'EventCallable<string | number>' is not assignable to type 'Unit<string>'.
        Type 'EventCallable<string>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string | boolean>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string | boolean>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string | boolean>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<void>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<void>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string | number>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string | boolean>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string | number>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string | boolean>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<string>'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<string>'.
        Type 'EventCallable<void>' is not assignable to type 'Unit<string>'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<string>'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<string>'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<string>'.
        Type 'EventCallable<string | boolean>' is not assignable to type 'Unit<string>'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<string>'.
        Type 'EventCallable<string | number>' is not assignable to type 'Unit<string>'.
        Type 'EventCallable<string>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string | boolean>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string | boolean>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string | boolean>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<void>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<void>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string | number>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string | boolean>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string | number>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string | boolean>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<string>'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<string>'.
        Type 'EventCallable<void>' is not assignable to type 'Unit<string>'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<string>'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<string>'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<string>'.
        Type 'EventCallable<string | boolean>' is not assignable to type 'Unit<string>'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<string>'.
        Type 'EventCallable<string | number>' is not assignable to type 'Unit<string>'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<string>'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<string>'.
        Type 'EventCallable<void>' is not assignable to type 'Unit<string>'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<string>'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<string>'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<string>'.
        Type 'EventCallable<string | boolean>' is not assignable to type 'Unit<string>'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<string>'.
        Type 'EventCallable<string | number>' is not assignable to type 'Unit<string>'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<string>'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<string>'.
        Type 'EventCallable<void>' is not assignable to type 'Unit<string>'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<string>'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<string>'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<string>'.
        Type 'EventCallable<string | boolean>' is not assignable to type 'Unit<string>'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<string>'.
        Type 'EventCallable<string | number>' is not assignable to type 'Unit<string>'.
        "
      `)
    })
  })
  describe('typed fn', () => {
    test('typed fn (should pass)', () => {
      //prettier-ignore
      {
        sample({source:num, target:[num]         , fn:(src:number) => src+1             })
        sample({source:num, target:[voidt]       , fn:(src:number) => src+1             })
        sample({source:num, target:[anyt]        , fn:(src:number) => src+1             })
        sample({source:num, target:[numStr]      , fn:(src:number) => src+1             })
        sample({source:num, target:[num,voidt]   , fn:(src:number) => src+1             })
        sample({source:num, target:[anyt,num]    , fn:(src:number) => src+1             })
        sample({source:num, target:[num,numStr]  , fn:(src:number) => src+1             })
        sample({source:num, target:[anyt,voidt]  , fn:(src:number) => src+1             })
        sample({source:num, target:[numStr,voidt], fn:(src:number) => src+1             })
        sample({source:num, target:[anyt,numStr] , fn:(src:number) => src+1             })
        sample({clock:num, target:[num]         , fn:(clk:number) => clk+1             })
        sample({clock:num, target:[voidt]       , fn:(clk:number) => clk+1             })
        sample({clock:num, target:[anyt]        , fn:(clk:number) => clk+1             })
        sample({clock:num, target:[numStr]      , fn:(clk:number) => clk+1             })
        sample({clock:num, target:[num,voidt]   , fn:(clk:number) => clk+1             })
        sample({clock:num, target:[anyt,num]    , fn:(clk:number) => clk+1             })
        sample({clock:num, target:[num,numStr]  , fn:(clk:number) => clk+1             })
        sample({clock:num, target:[anyt,voidt]  , fn:(clk:number) => clk+1             })
        sample({clock:num, target:[numStr,voidt], fn:(clk:number) => clk+1             })
        sample({clock:num, target:[anyt,numStr] , fn:(clk:number) => clk+1             })
        sample({source:num, clock:num, target:[num]         , fn:(src:number,clk:number) => src+clk})
        sample({source:num, clock:num, target:[voidt]       , fn:(src:number,clk:number) => src+clk})
        sample({source:num, clock:num, target:[anyt]        , fn:(src:number,clk:number) => src+clk})
        sample({source:num, clock:num, target:[numStr]      , fn:(src:number,clk:number) => src+clk})
        sample({source:num, clock:num, target:[num,voidt]   , fn:(src:number,clk:number) => src+clk})
        sample({source:num, clock:num, target:[anyt,num]    , fn:(src:number,clk:number) => src+clk})
        sample({source:num, clock:num, target:[num,numStr]  , fn:(src:number,clk:number) => src+clk})
        sample({source:num, clock:num, target:[anyt,voidt]  , fn:(src:number,clk:number) => src+clk})
        sample({source:num, clock:num, target:[numStr,voidt], fn:(src:number,clk:number) => src+clk})
        sample({source:num, clock:num, target:[anyt,numStr] , fn:(src:number,clk:number) => src+clk})
      }
      expect(typecheck).toMatchInlineSnapshot(`
        "
        no errors
        "
      `)
    })
    test('typed fn (should fail)', () => {
      //prettier-ignore
      {
        //@ts-expect-error
        sample({source:num, target:[str]           , fn:(src:number) => src+1             })
        //@ts-expect-error
        sample({source:num, target:[strBool]       , fn:(src:number) => src+1             })
        //@ts-expect-error
        sample({source:num, target:[num,str]       , fn:(src:number) => src+1             })
        //@ts-expect-error
        sample({source:num, target:[num,strBool]   , fn:(src:number) => src+1             })
        //@ts-expect-error
        sample({source:num, target:[strBool,voidt] , fn:(src:number) => src+1             })
        //@ts-expect-error
        sample({source:num, target:[str,voidt]     , fn:(src:number) => src+1             })
        //@ts-expect-error
        sample({source:num, target:[anyt,str]      , fn:(src:number) => src+1             })
        //@ts-expect-error
        sample({source:num, target:[numStr,str]    , fn:(src:number) => src+1             })
        //@ts-expect-error
        sample({source:num, target:[anyt,strBool]  , fn:(src:number) => src+1             })
        //@ts-expect-error
        sample({source:num, target:[numStr,strBool], fn:(src:number) => src+1             })
        //@ts-expect-error
        sample({clock:num, target:[str]           , fn:(clk:number) => clk+1             })
        //@ts-expect-error
        sample({clock:num, target:[strBool]       , fn:(clk:number) => clk+1             })
        //@ts-expect-error
        sample({clock:num, target:[num,str]       , fn:(clk:number) => clk+1             })
        //@ts-expect-error
        sample({clock:num, target:[num,strBool]   , fn:(clk:number) => clk+1             })
        //@ts-expect-error
        sample({clock:num, target:[strBool,voidt] , fn:(clk:number) => clk+1             })
        //@ts-expect-error
        sample({clock:num, target:[str,voidt]     , fn:(clk:number) => clk+1             })
        //@ts-expect-error
        sample({clock:num, target:[anyt,str]      , fn:(clk:number) => clk+1             })
        //@ts-expect-error
        sample({clock:num, target:[numStr,str]    , fn:(clk:number) => clk+1             })
        //@ts-expect-error
        sample({clock:num, target:[anyt,strBool]  , fn:(clk:number) => clk+1             })
        //@ts-expect-error
        sample({clock:num, target:[numStr,strBool], fn:(clk:number) => clk+1             })
        //@ts-expect-error
        sample({source:num, clock:num, target:[str]           , fn:(src:number,clk:number) => src+clk})
        //@ts-expect-error
        sample({source:num, clock:num, target:[strBool]       , fn:(src:number,clk:number) => src+clk})
        //@ts-expect-error
        sample({source:num, clock:num, target:[num,str]       , fn:(src:number,clk:number) => src+clk})
        //@ts-expect-error
        sample({source:num, clock:num, target:[num,strBool]   , fn:(src:number,clk:number) => src+clk})
        //@ts-expect-error
        sample({source:num, clock:num, target:[strBool,voidt] , fn:(src:number,clk:number) => src+clk})
        //@ts-expect-error
        sample({source:num, clock:num, target:[str,voidt]     , fn:(src:number,clk:number) => src+clk})
        //@ts-expect-error
        sample({source:num, clock:num, target:[anyt,str]      , fn:(src:number,clk:number) => src+clk})
        //@ts-expect-error
        sample({source:num, clock:num, target:[numStr,str]    , fn:(src:number,clk:number) => src+clk})
        //@ts-expect-error
        sample({source:num, clock:num, target:[anyt,strBool]  , fn:(src:number,clk:number) => src+clk})
        //@ts-expect-error
        sample({source:num, clock:num, target:[numStr,strBool], fn:(src:number,clk:number) => src+clk})
        //@ts-expect-error
        sample({source:num, clock:str, target:[num]           , fn:(src:number,clk:number) => src+clk})
        //@ts-expect-error
        sample({source:num, clock:str, target:[voidt]         , fn:(src:number,clk:number) => src+clk})
        //@ts-expect-error
        sample({source:num, clock:str, target:[str]           , fn:(src:number,clk:number) => src+clk})
        //@ts-expect-error
        sample({source:num, clock:str, target:[anyt]          , fn:(src:number,clk:number) => src+clk})
        //@ts-expect-error
        sample({source:num, clock:str, target:[strBool]       , fn:(src:number,clk:number) => src+clk})
        //@ts-expect-error
        sample({source:num, clock:str, target:[numStr]        , fn:(src:number,clk:number) => src+clk})
        //@ts-expect-error
        sample({source:num, clock:str, target:[num,voidt]     , fn:(src:number,clk:number) => src+clk})
        //@ts-expect-error
        sample({source:num, clock:str, target:[num,str]       , fn:(src:number,clk:number) => src+clk})
        //@ts-expect-error
        sample({source:num, clock:str, target:[anyt,num]      , fn:(src:number,clk:number) => src+clk})
        //@ts-expect-error
        sample({source:num, clock:str, target:[num,strBool]   , fn:(src:number,clk:number) => src+clk})
        //@ts-expect-error
        sample({source:num, clock:str, target:[num,numStr]    , fn:(src:number,clk:number) => src+clk})
        //@ts-expect-error
        sample({source:num, clock:str, target:[anyt,voidt]    , fn:(src:number,clk:number) => src+clk})
        //@ts-expect-error
        sample({source:num, clock:str, target:[strBool,voidt] , fn:(src:number,clk:number) => src+clk})
        //@ts-expect-error
        sample({source:num, clock:str, target:[numStr,voidt]  , fn:(src:number,clk:number) => src+clk})
        //@ts-expect-error
        sample({source:num, clock:str, target:[str,voidt]     , fn:(src:number,clk:number) => src+clk})
        //@ts-expect-error
        sample({source:num, clock:str, target:[anyt,str]      , fn:(src:number,clk:number) => src+clk})
        //@ts-expect-error
        sample({source:num, clock:str, target:[numStr,str]    , fn:(src:number,clk:number) => src+clk})
        //@ts-expect-error
        sample({source:num, clock:str, target:[anyt,numStr]   , fn:(src:number,clk:number) => src+clk})
        //@ts-expect-error
        sample({source:num, clock:str, target:[anyt,strBool]  , fn:(src:number,clk:number) => src+clk})
        //@ts-expect-error
        sample({source:num, clock:str, target:[numStr,strBool], fn:(src:number,clk:number) => src+clk})
        //@ts-expect-error
        sample({source:str, clock:num, target:[num]           , fn:(src:number,clk:number) => src+clk})
        //@ts-expect-error
        sample({source:str, clock:num, target:[voidt]         , fn:(src:number,clk:number) => src+clk})
        //@ts-expect-error
        sample({source:str, clock:num, target:[str]           , fn:(src:number,clk:number) => src+clk})
        //@ts-expect-error
        sample({source:str, clock:num, target:[anyt]          , fn:(src:number,clk:number) => src+clk})
        //@ts-expect-error
        sample({source:str, clock:num, target:[strBool]       , fn:(src:number,clk:number) => src+clk})
        //@ts-expect-error
        sample({source:str, clock:num, target:[numStr]        , fn:(src:number,clk:number) => src+clk})
        //@ts-expect-error
        sample({source:str, clock:num, target:[num,voidt]     , fn:(src:number,clk:number) => src+clk})
        //@ts-expect-error
        sample({source:str, clock:num, target:[num,str]       , fn:(src:number,clk:number) => src+clk})
        //@ts-expect-error
        sample({source:str, clock:num, target:[anyt,num]      , fn:(src:number,clk:number) => src+clk})
        //@ts-expect-error
        sample({source:str, clock:num, target:[num,strBool]   , fn:(src:number,clk:number) => src+clk})
        //@ts-expect-error
        sample({source:str, clock:num, target:[num,numStr]    , fn:(src:number,clk:number) => src+clk})
        //@ts-expect-error
        sample({source:str, clock:num, target:[anyt,voidt]    , fn:(src:number,clk:number) => src+clk})
        //@ts-expect-error
        sample({source:str, clock:num, target:[strBool,voidt] , fn:(src:number,clk:number) => src+clk})
        //@ts-expect-error
        sample({source:str, clock:num, target:[numStr,voidt]  , fn:(src:number,clk:number) => src+clk})
        //@ts-expect-error
        sample({source:str, clock:num, target:[str,voidt]     , fn:(src:number,clk:number) => src+clk})
        //@ts-expect-error
        sample({source:str, clock:num, target:[anyt,str]      , fn:(src:number,clk:number) => src+clk})
        //@ts-expect-error
        sample({source:str, clock:num, target:[numStr,str]    , fn:(src:number,clk:number) => src+clk})
        //@ts-expect-error
        sample({source:str, clock:num, target:[anyt,numStr]   , fn:(src:number,clk:number) => src+clk})
        //@ts-expect-error
        sample({source:str, clock:num, target:[anyt,strBool]  , fn:(src:number,clk:number) => src+clk})
        //@ts-expect-error
        sample({source:str, clock:num, target:[numStr,strBool], fn:(src:number,clk:number) => src+clk})
      }
      expect(typecheck).toMatchInlineSnapshot(`
        "
        Type 'EventCallable<string>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string | boolean>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string | boolean>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string | boolean>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<void>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<void>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string | number>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string | boolean>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string | number>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string | boolean>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string | boolean>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string | boolean>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string | boolean>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<void>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<void>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string | number>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string | boolean>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string | number>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string | boolean>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string | boolean>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string | boolean>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string | boolean>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<void>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<void>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string | number>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string | boolean>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string | number>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string | boolean>' is not assignable to type 'Unit<number>'.
        Type '(src: number, clk: number) => number' is not assignable to type '((src: number, clk: string) => any) & ((src: number, clk: number) => number)'.
          Type '(src: number, clk: number) => number' is not assignable to type '(src: number, clk: string) => any'.
            Types of parameters 'clk' and 'clk' are incompatible.
              Type 'string' is not assignable to type 'number'.
        Type '(src: number, clk: number) => number' is not assignable to type '((src: number, clk: string) => any) & ((src: number, clk: number) => number)'.
          Type '(src: number, clk: number) => number' is not assignable to type '(src: number, clk: string) => any'.
            Types of parameters 'clk' and 'clk' are incompatible.
              Type 'string' is not assignable to type 'number'.
        Type '(src: number, clk: number) => number' is not assignable to type '((src: number, clk: string) => any) & ((src: number, clk: number) => number)'.
          Type '(src: number, clk: number) => number' is not assignable to type '(src: number, clk: string) => any'.
            Types of parameters 'clk' and 'clk' are incompatible.
              Type 'string' is not assignable to type 'number'.
        Type '(src: number, clk: number) => number' is not assignable to type '((src: number, clk: string) => any) & ((src: number, clk: number) => number)'.
          Type '(src: number, clk: number) => number' is not assignable to type '(src: number, clk: string) => any'.
            Types of parameters 'clk' and 'clk' are incompatible.
              Type 'string' is not assignable to type 'number'.
        Type '(src: number, clk: number) => number' is not assignable to type '((src: number, clk: string) => any) & ((src: number, clk: number) => number)'.
          Type '(src: number, clk: number) => number' is not assignable to type '(src: number, clk: string) => any'.
            Types of parameters 'clk' and 'clk' are incompatible.
              Type 'string' is not assignable to type 'number'.
        Type '(src: number, clk: number) => number' is not assignable to type '((src: number, clk: string) => any) & ((src: number, clk: number) => number)'.
          Type '(src: number, clk: number) => number' is not assignable to type '(src: number, clk: string) => any'.
            Types of parameters 'clk' and 'clk' are incompatible.
              Type 'string' is not assignable to type 'number'.
        Type '(src: number, clk: number) => number' is not assignable to type '((src: number, clk: string) => any) & ((src: number, clk: number) => number)'.
          Type '(src: number, clk: number) => number' is not assignable to type '(src: number, clk: string) => any'.
            Types of parameters 'clk' and 'clk' are incompatible.
              Type 'string' is not assignable to type 'number'.
        Type '(src: number, clk: number) => number' is not assignable to type '((src: number, clk: string) => any) & ((src: number, clk: number) => number)'.
          Type '(src: number, clk: number) => number' is not assignable to type '(src: number, clk: string) => any'.
            Types of parameters 'clk' and 'clk' are incompatible.
              Type 'string' is not assignable to type 'number'.
        Type '(src: number, clk: number) => number' is not assignable to type '((src: number, clk: string) => any) & ((src: number, clk: number) => number)'.
          Type '(src: number, clk: number) => number' is not assignable to type '(src: number, clk: string) => any'.
            Types of parameters 'clk' and 'clk' are incompatible.
              Type 'string' is not assignable to type 'number'.
        Type '(src: number, clk: number) => number' is not assignable to type '((src: number, clk: string) => any) & ((src: number, clk: number) => number)'.
          Type '(src: number, clk: number) => number' is not assignable to type '(src: number, clk: string) => any'.
            Types of parameters 'clk' and 'clk' are incompatible.
              Type 'string' is not assignable to type 'number'.
        Type '(src: number, clk: number) => number' is not assignable to type '((src: number, clk: string) => any) & ((src: number, clk: number) => number)'.
          Type '(src: number, clk: number) => number' is not assignable to type '(src: number, clk: string) => any'.
            Types of parameters 'clk' and 'clk' are incompatible.
              Type 'string' is not assignable to type 'number'.
        Type '(src: number, clk: number) => number' is not assignable to type '((src: number, clk: string) => any) & ((src: number, clk: number) => number)'.
          Type '(src: number, clk: number) => number' is not assignable to type '(src: number, clk: string) => any'.
            Types of parameters 'clk' and 'clk' are incompatible.
              Type 'string' is not assignable to type 'number'.
        Type '(src: number, clk: number) => number' is not assignable to type '((src: number, clk: string) => any) & ((src: number, clk: number) => number)'.
          Type '(src: number, clk: number) => number' is not assignable to type '(src: number, clk: string) => any'.
            Types of parameters 'clk' and 'clk' are incompatible.
              Type 'string' is not assignable to type 'number'.
        Type '(src: number, clk: number) => number' is not assignable to type '((src: number, clk: string) => any) & ((src: number, clk: number) => number)'.
          Type '(src: number, clk: number) => number' is not assignable to type '(src: number, clk: string) => any'.
            Types of parameters 'clk' and 'clk' are incompatible.
              Type 'string' is not assignable to type 'number'.
        Type '(src: number, clk: number) => number' is not assignable to type '((src: number, clk: string) => any) & ((src: number, clk: number) => number)'.
          Type '(src: number, clk: number) => number' is not assignable to type '(src: number, clk: string) => any'.
            Types of parameters 'clk' and 'clk' are incompatible.
              Type 'string' is not assignable to type 'number'.
        Type '(src: number, clk: number) => number' is not assignable to type '((src: number, clk: string) => any) & ((src: number, clk: number) => number)'.
          Type '(src: number, clk: number) => number' is not assignable to type '(src: number, clk: string) => any'.
            Types of parameters 'clk' and 'clk' are incompatible.
              Type 'string' is not assignable to type 'number'.
        Type '(src: number, clk: number) => number' is not assignable to type '((src: number, clk: string) => any) & ((src: number, clk: number) => number)'.
          Type '(src: number, clk: number) => number' is not assignable to type '(src: number, clk: string) => any'.
            Types of parameters 'clk' and 'clk' are incompatible.
              Type 'string' is not assignable to type 'number'.
        Type '(src: number, clk: number) => number' is not assignable to type '((src: number, clk: string) => any) & ((src: number, clk: number) => number)'.
          Type '(src: number, clk: number) => number' is not assignable to type '(src: number, clk: string) => any'.
            Types of parameters 'clk' and 'clk' are incompatible.
              Type 'string' is not assignable to type 'number'.
        Type '(src: number, clk: number) => number' is not assignable to type '((src: number, clk: string) => any) & ((src: number, clk: number) => number)'.
          Type '(src: number, clk: number) => number' is not assignable to type '(src: number, clk: string) => any'.
            Types of parameters 'clk' and 'clk' are incompatible.
              Type 'string' is not assignable to type 'number'.
        Type '(src: number, clk: number) => number' is not assignable to type '((src: number, clk: string) => any) & ((src: number, clk: number) => number)'.
          Type '(src: number, clk: number) => number' is not assignable to type '(src: number, clk: string) => any'.
            Types of parameters 'clk' and 'clk' are incompatible.
              Type 'string' is not assignable to type 'number'.
        Type '(src: number, clk: number) => number' is not assignable to type '((src: string, clk: number) => any) & ((src: number, clk: number) => number)'.
          Type '(src: number, clk: number) => number' is not assignable to type '(src: string, clk: number) => any'.
            Types of parameters 'src' and 'src' are incompatible.
              Type 'string' is not assignable to type 'number'.
        Type '(src: number, clk: number) => number' is not assignable to type '((src: string, clk: number) => any) & ((src: number, clk: number) => number)'.
          Type '(src: number, clk: number) => number' is not assignable to type '(src: string, clk: number) => any'.
            Types of parameters 'src' and 'src' are incompatible.
              Type 'string' is not assignable to type 'number'.
        Type '(src: number, clk: number) => number' is not assignable to type '((src: string, clk: number) => any) & ((src: number, clk: number) => number)'.
          Type '(src: number, clk: number) => number' is not assignable to type '(src: string, clk: number) => any'.
            Types of parameters 'src' and 'src' are incompatible.
              Type 'string' is not assignable to type 'number'.
        Type '(src: number, clk: number) => number' is not assignable to type '((src: string, clk: number) => any) & ((src: number, clk: number) => number)'.
          Type '(src: number, clk: number) => number' is not assignable to type '(src: string, clk: number) => any'.
            Types of parameters 'src' and 'src' are incompatible.
              Type 'string' is not assignable to type 'number'.
        Type '(src: number, clk: number) => number' is not assignable to type '((src: string, clk: number) => any) & ((src: number, clk: number) => number)'.
          Type '(src: number, clk: number) => number' is not assignable to type '(src: string, clk: number) => any'.
            Types of parameters 'src' and 'src' are incompatible.
              Type 'string' is not assignable to type 'number'.
        Type '(src: number, clk: number) => number' is not assignable to type '((src: string, clk: number) => any) & ((src: number, clk: number) => number)'.
          Type '(src: number, clk: number) => number' is not assignable to type '(src: string, clk: number) => any'.
            Types of parameters 'src' and 'src' are incompatible.
              Type 'string' is not assignable to type 'number'.
        Type '(src: number, clk: number) => number' is not assignable to type '((src: string, clk: number) => any) & ((src: number, clk: number) => number)'.
          Type '(src: number, clk: number) => number' is not assignable to type '(src: string, clk: number) => any'.
            Types of parameters 'src' and 'src' are incompatible.
              Type 'string' is not assignable to type 'number'.
        Type '(src: number, clk: number) => number' is not assignable to type '((src: string, clk: number) => any) & ((src: number, clk: number) => number)'.
          Type '(src: number, clk: number) => number' is not assignable to type '(src: string, clk: number) => any'.
            Types of parameters 'src' and 'src' are incompatible.
              Type 'string' is not assignable to type 'number'.
        Type '(src: number, clk: number) => number' is not assignable to type '((src: string, clk: number) => any) & ((src: number, clk: number) => number)'.
          Type '(src: number, clk: number) => number' is not assignable to type '(src: string, clk: number) => any'.
            Types of parameters 'src' and 'src' are incompatible.
              Type 'string' is not assignable to type 'number'.
        Type '(src: number, clk: number) => number' is not assignable to type '((src: string, clk: number) => any) & ((src: number, clk: number) => number)'.
          Type '(src: number, clk: number) => number' is not assignable to type '(src: string, clk: number) => any'.
            Types of parameters 'src' and 'src' are incompatible.
              Type 'string' is not assignable to type 'number'.
        Type '(src: number, clk: number) => number' is not assignable to type '((src: string, clk: number) => any) & ((src: number, clk: number) => number)'.
          Type '(src: number, clk: number) => number' is not assignable to type '(src: string, clk: number) => any'.
            Types of parameters 'src' and 'src' are incompatible.
              Type 'string' is not assignable to type 'number'.
        Type '(src: number, clk: number) => number' is not assignable to type '((src: string, clk: number) => any) & ((src: number, clk: number) => number)'.
          Type '(src: number, clk: number) => number' is not assignable to type '(src: string, clk: number) => any'.
            Types of parameters 'src' and 'src' are incompatible.
              Type 'string' is not assignable to type 'number'.
        Type '(src: number, clk: number) => number' is not assignable to type '((src: string, clk: number) => any) & ((src: number, clk: number) => number)'.
          Type '(src: number, clk: number) => number' is not assignable to type '(src: string, clk: number) => any'.
            Types of parameters 'src' and 'src' are incompatible.
              Type 'string' is not assignable to type 'number'.
        Type '(src: number, clk: number) => number' is not assignable to type '((src: string, clk: number) => any) & ((src: number, clk: number) => number)'.
          Type '(src: number, clk: number) => number' is not assignable to type '(src: string, clk: number) => any'.
            Types of parameters 'src' and 'src' are incompatible.
              Type 'string' is not assignable to type 'number'.
        Type '(src: number, clk: number) => number' is not assignable to type '((src: string, clk: number) => any) & ((src: number, clk: number) => number)'.
          Type '(src: number, clk: number) => number' is not assignable to type '(src: string, clk: number) => any'.
            Types of parameters 'src' and 'src' are incompatible.
              Type 'string' is not assignable to type 'number'.
        Type '(src: number, clk: number) => number' is not assignable to type '((src: string, clk: number) => any) & ((src: number, clk: number) => number)'.
          Type '(src: number, clk: number) => number' is not assignable to type '(src: string, clk: number) => any'.
            Types of parameters 'src' and 'src' are incompatible.
              Type 'string' is not assignable to type 'number'.
        Type '(src: number, clk: number) => number' is not assignable to type '((src: string, clk: number) => any) & ((src: number, clk: number) => number)'.
          Type '(src: number, clk: number) => number' is not assignable to type '(src: string, clk: number) => any'.
            Types of parameters 'src' and 'src' are incompatible.
              Type 'string' is not assignable to type 'number'.
        Type '(src: number, clk: number) => number' is not assignable to type '((src: string, clk: number) => any) & ((src: number, clk: number) => number)'.
          Type '(src: number, clk: number) => number' is not assignable to type '(src: string, clk: number) => any'.
            Types of parameters 'src' and 'src' are incompatible.
              Type 'string' is not assignable to type 'number'.
        Type '(src: number, clk: number) => number' is not assignable to type '((src: string, clk: number) => any) & ((src: number, clk: number) => number)'.
          Type '(src: number, clk: number) => number' is not assignable to type '(src: string, clk: number) => any'.
            Types of parameters 'src' and 'src' are incompatible.
              Type 'string' is not assignable to type 'number'.
        Type '(src: number, clk: number) => number' is not assignable to type '((src: string, clk: number) => any) & ((src: number, clk: number) => number)'.
          Type '(src: number, clk: number) => number' is not assignable to type '(src: string, clk: number) => any'.
            Types of parameters 'src' and 'src' are incompatible.
              Type 'string' is not assignable to type 'number'.
        "
      `)
    })
  })
}
{
  /** used as valid source type */
  type AN = {a: number}
  /** used as invalid source type */
  type AS = {a: string}
  /** used as valid source type */
  type AB = {a: number; b: string}
  /** used as invalid source type */
  type ABN = {a: number; b: number}
  const num = createEvent<number>()
  const $num = createStore<number>(0)
  const $str = createStore<string>('')
  const a_num = createEvent<AN>()
  const a_str = createEvent<AS>()
  const ab = createEvent<AB>()
  const abn = createEvent<ABN>()
  const l_num = createEvent<[number]>()
  const l_str = createEvent<[string]>()
  const l_num_str = createEvent<[number, string]>()
  const l_num_num = createEvent<[number, number]>()

  const fn = {
    noArgs: () => ({a: 2, b: ''}),
    assertFirst: {
      object: {
        solo: ({a}: AS, cl: number) => ({a: cl, b: a}),
        pair: ({a, b}: ABN, cl: number) => ({a: b + cl, b: ''}),
      },
      tuple: {
        solo: ([a]: [string], cl: number) => ({a: cl, b: a}),
        pair: ([a, b]: [number, number], cl: number) => ({a: b + cl, b: ''}),
      },
    },
    assertFirstOnly: {
      object: {
        solo: ({a}: AS) => ({a: 0, b: a}),
        pair: ({b}: ABN) => ({a: b, b: ''}),
      },
      tuple: {
        solo: ([a]: [string]) => ({a: 2, b: a}),
        pair: ([, b]: [number, number]) => ({a: b, b: ''}),
      },
    },
    assertSecond: {
      object: {
        solo: ({a}: AN, cl: string) => ({a, b: cl}),
        pair: ({a}: AB, cl: string) => ({a, b: cl}),
      },
      tuple: {
        solo: ([a]: [number], cl: string) => ({a, b: cl}),
        pair: ([a]: [number, string], cl: string) => ({a, b: cl}),
      },
    },
    typedSrc: {
      object: {
        solo: ({a}: AN) => ({a, b: ''}),
        pair: ({a, b}: AB) => ({a, b}),
      },
      tuple: {
        solo: ([a]: [number]) => ({a, b: ''}),
        pair: ([a, b]: [number, string]) => ({a, b}),
      },
    },
    typedSrcClock: {
      object: {
        solo: ({a}: AN, cl: number) => ({a: a + cl, b: ''}),
        pair: ({a, b}: AB, cl: number) => ({a: a + cl, b}),
      },
      tuple: {
        solo: ([a]: [number], cl: number) => ({a: a + cl, b: ''}),
        pair: ([a, b]: [number, string], cl: number) => ({a: a + cl, b}),
      },
    },
  }
  describe('source:wide', () => {
    test('source:wide (should pass)', () => {
      //prettier-ignore
      {
        sample({source:{a:$num,b:$str}     , target:[a_num]          })
        sample({source:{a:$num,b:$str}     , target:[ab]             })
        sample({source:{a:$num,b:$str}     , target:[a_num,ab]       })
        sample({source:[$num,$str]         , target:[l_num]          })
        sample({source:[$num,$str]         , target:[l_num_str]      })
        sample({source:[$num,$str]         , target:[l_num,l_num_str]})
        sample({source:[$num,$str] as const, target:[l_num]          })
        sample({source:[$num,$str] as const, target:[l_num_str]      })
        sample({source:[$num,$str] as const, target:[l_num,l_num_str]})
        sample({source:{a:$num,b:$str}     , clock:num, target:[a_num]          })
        sample({source:{a:$num,b:$str}     , clock:num, target:[ab]             })
        sample({source:{a:$num,b:$str}     , clock:num, target:[a_num,ab]       })
        sample({source:[$num,$str]         , clock:num, target:[l_num]          })
        sample({source:[$num,$str]         , clock:num, target:[l_num_str]      })
        sample({source:[$num,$str]         , clock:num, target:[l_num,l_num_str]})
        sample({source:[$num,$str] as const, clock:num, target:[l_num]          })
        sample({source:[$num,$str] as const, clock:num, target:[l_num_str]      })
        sample({source:[$num,$str] as const, clock:num, target:[l_num,l_num_str]})
      }
      expect(typecheck).toMatchInlineSnapshot(`
        "
        Type 'EventCallable<[number]>' is not assignable to type 'Unit<readonly [number, string]>'.
          Types of property '__' are incompatible.
            Type '[number]' is not assignable to type 'readonly [number, string]'.
              Source has 1 element(s) but target requires 2.
        Type 'EventCallable<[number]>' is not assignable to type 'Unit<readonly [number, string]>'.
        Type 'EventCallable<[number]>' is not assignable to type 'Unit<readonly [number, string]>'.
        Type 'EventCallable<[number]>' is not assignable to type 'Unit<readonly [number, string]>'.
        Type 'EventCallable<[number]>' is not assignable to type 'Unit<readonly [number, string]>'.
        Type 'EventCallable<[number]>' is not assignable to type 'Unit<readonly [number, string]>'.
        Type 'EventCallable<[number]>' is not assignable to type 'Unit<readonly [number, string]>'.
        Type 'EventCallable<[number]>' is not assignable to type 'Unit<readonly [number, string]>'.
        "
      `)
    })
    test('source:wide (should fail)', () => {
      //prettier-ignore
      {
        //@ts-expect-error
        sample({source:{a:$num,b:$str}     , target:[a_str]              })
        //@ts-expect-error
        sample({source:{a:$num,b:$str}     , target:[abn]                })
        //@ts-expect-error
        sample({source:{a:$num,b:$str}     , target:[a_num,a_str]        })
        //@ts-expect-error
        sample({source:{a:$num,b:$str}     , target:[a_num,abn]          })
        //@ts-expect-error
        sample({source:{a:$num,b:$str}     , target:[a_str,ab]           })
        //@ts-expect-error
        sample({source:{a:$num,b:$str}     , target:[abn,a_str]          })
        //@ts-expect-error
        sample({source:{a:$num,b:$str}     , target:[abn,ab]             })
        //@ts-expect-error
        sample({source:{a:$num,b:$str}     , target:[ab,a_str]           })
        //@ts-expect-error
        sample({source:[$num,$str]         , target:[l_str]              })
        //@ts-expect-error
        sample({source:[$num,$str]         , target:[l_num_num]          })
        //@ts-expect-error
        sample({source:[$num,$str]         , target:[l_num,l_str]        })
        //@ts-expect-error
        sample({source:[$num,$str]         , target:[l_num,l_num_num]    })
        //@ts-expect-error
        sample({source:[$num,$str]         , target:[l_str,l_num_num]    })
        //@ts-expect-error
        sample({source:[$num,$str]         , target:[l_num_str,l_str]    })
        //@ts-expect-error
        sample({source:[$num,$str]         , target:[l_num_str,l_num_num]})
        //@ts-expect-error
        sample({source:[$num,$str]         , target:[l_num_num,l_str]    })
        //@ts-expect-error
        sample({source:[$num,$str] as const, target:[l_str]              })
        //@ts-expect-error
        sample({source:[$num,$str] as const, target:[l_num_num]          })
        //@ts-expect-error
        sample({source:[$num,$str] as const, target:[l_num,l_str]        })
        //@ts-expect-error
        sample({source:[$num,$str] as const, target:[l_num,l_num_num]    })
        //@ts-expect-error
        sample({source:[$num,$str] as const, target:[l_str,l_num_num]    })
        //@ts-expect-error
        sample({source:[$num,$str] as const, target:[l_num_str,l_str]    })
        //@ts-expect-error
        sample({source:[$num,$str] as const, target:[l_num_str,l_num_num]})
        //@ts-expect-error
        sample({source:[$num,$str] as const, target:[l_num_num,l_str]    })
        //@ts-expect-error
        sample({source:{a:$num,b:$str}     , clock:num, target:[a_str]              })
        //@ts-expect-error
        sample({source:{a:$num,b:$str}     , clock:num, target:[abn]                })
        //@ts-expect-error
        sample({source:{a:$num,b:$str}     , clock:num, target:[a_num,a_str]        })
        //@ts-expect-error
        sample({source:{a:$num,b:$str}     , clock:num, target:[a_num,abn]          })
        //@ts-expect-error
        sample({source:{a:$num,b:$str}     , clock:num, target:[a_str,ab]           })
        //@ts-expect-error
        sample({source:{a:$num,b:$str}     , clock:num, target:[abn,a_str]          })
        //@ts-expect-error
        sample({source:{a:$num,b:$str}     , clock:num, target:[abn,ab]             })
        //@ts-expect-error
        sample({source:{a:$num,b:$str}     , clock:num, target:[ab,a_str]           })
        //@ts-expect-error
        sample({source:[$num,$str]         , clock:num, target:[l_str]              })
        //@ts-expect-error
        sample({source:[$num,$str]         , clock:num, target:[l_num_num]          })
        //@ts-expect-error
        sample({source:[$num,$str]         , clock:num, target:[l_num,l_str]        })
        //@ts-expect-error
        sample({source:[$num,$str]         , clock:num, target:[l_num,l_num_num]    })
        //@ts-expect-error
        sample({source:[$num,$str]         , clock:num, target:[l_str,l_num_num]    })
        //@ts-expect-error
        sample({source:[$num,$str]         , clock:num, target:[l_num_str,l_str]    })
        //@ts-expect-error
        sample({source:[$num,$str]         , clock:num, target:[l_num_str,l_num_num]})
        //@ts-expect-error
        sample({source:[$num,$str]         , clock:num, target:[l_num_num,l_str]    })
        //@ts-expect-error
        sample({source:[$num,$str] as const, clock:num, target:[l_str]              })
        //@ts-expect-error
        sample({source:[$num,$str] as const, clock:num, target:[l_num_num]          })
        //@ts-expect-error
        sample({source:[$num,$str] as const, clock:num, target:[l_num,l_str]        })
        //@ts-expect-error
        sample({source:[$num,$str] as const, clock:num, target:[l_num,l_num_num]    })
        //@ts-expect-error
        sample({source:[$num,$str] as const, clock:num, target:[l_str,l_num_num]    })
        //@ts-expect-error
        sample({source:[$num,$str] as const, clock:num, target:[l_num_str,l_str]    })
        //@ts-expect-error
        sample({source:[$num,$str] as const, clock:num, target:[l_num_str,l_num_num]})
        //@ts-expect-error
        sample({source:[$num,$str] as const, clock:num, target:[l_num_num,l_str]    })
      }
      expect(typecheck).toMatchInlineSnapshot(`
        "
        Type 'EventCallable<AS>' is not assignable to type 'Unit<{ readonly a: number; readonly b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AS' but required in type '{ readonly a: number; readonly b: string; }'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<{ readonly a: number; readonly b: string; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'number' is not assignable to type 'string'.
        Type 'EventCallable<AN>' is not assignable to type 'Unit<{ readonly a: number; readonly b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AN' but required in type '{ readonly a: number; readonly b: string; }'.
        Type 'EventCallable<AS>' is not assignable to type 'Unit<{ readonly a: number; readonly b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AS' but required in type '{ readonly a: number; readonly b: string; }'.
        Type 'EventCallable<AN>' is not assignable to type 'Unit<{ readonly a: number; readonly b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AN' but required in type '{ readonly a: number; readonly b: string; }'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<{ readonly a: number; readonly b: string; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'number' is not assignable to type 'string'.
        Type 'EventCallable<AS>' is not assignable to type 'Unit<{ readonly a: number; readonly b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AS' but required in type '{ readonly a: number; readonly b: string; }'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<{ readonly a: number; readonly b: string; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'number' is not assignable to type 'string'.
        Type 'EventCallable<AS>' is not assignable to type 'Unit<{ readonly a: number; readonly b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AS' but required in type '{ readonly a: number; readonly b: string; }'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<{ readonly a: number; readonly b: string; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'number' is not assignable to type 'string'.
        Type 'EventCallable<AS>' is not assignable to type 'Unit<{ readonly a: number; readonly b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AS' but required in type '{ readonly a: number; readonly b: string; }'.
        Type 'EventCallable<[string]>' is not assignable to type 'Unit<readonly [number, string]>'.
          Types of property '__' are incompatible.
            Type '[string]' is not assignable to type 'readonly [number, string]'.
              Source has 1 element(s) but target requires 2.
        Type 'EventCallable<[number, number]>' is not assignable to type 'Unit<readonly [number, string]>'.
          Type at position 1 in source is not compatible with type at position 1 in target.
            The types of '__' are incompatible between these types.
              Type 'number' is not assignable to type 'string'.
        Type 'EventCallable<[number]>' is not assignable to type 'Unit<readonly [number, string]>'.
        Type 'EventCallable<[string]>' is not assignable to type 'Unit<readonly [number, string]>'.
        Type 'EventCallable<[number]>' is not assignable to type 'Unit<readonly [number, string]>'.
        Type 'EventCallable<[number, number]>' is not assignable to type 'Unit<readonly [number, string]>'.
        Type 'EventCallable<[string]>' is not assignable to type 'Unit<readonly [number, string]>'.
        Type 'EventCallable<[number, number]>' is not assignable to type 'Unit<readonly [number, string]>'.
        Type 'EventCallable<[string]>' is not assignable to type 'Unit<readonly [number, string]>'.
        Type 'EventCallable<[number, number]>' is not assignable to type 'Unit<readonly [number, string]>'.
        Type 'EventCallable<[number, number]>' is not assignable to type 'Unit<readonly [number, string]>'.
        Type 'EventCallable<[string]>' is not assignable to type 'Unit<readonly [number, string]>'.
        Type 'EventCallable<[string]>' is not assignable to type 'Unit<readonly [number, string]>'.
        Type 'EventCallable<[number, number]>' is not assignable to type 'Unit<readonly [number, string]>'.
        Type 'EventCallable<[number]>' is not assignable to type 'Unit<readonly [number, string]>'.
        Type 'EventCallable<[string]>' is not assignable to type 'Unit<readonly [number, string]>'.
        Type 'EventCallable<[number]>' is not assignable to type 'Unit<readonly [number, string]>'.
        Type 'EventCallable<[number, number]>' is not assignable to type 'Unit<readonly [number, string]>'.
        Type 'EventCallable<[string]>' is not assignable to type 'Unit<readonly [number, string]>'.
        Type 'EventCallable<[number, number]>' is not assignable to type 'Unit<readonly [number, string]>'.
        Type 'EventCallable<[string]>' is not assignable to type 'Unit<readonly [number, string]>'.
        Type 'EventCallable<[number, number]>' is not assignable to type 'Unit<readonly [number, string]>'.
        Type 'EventCallable<[number, number]>' is not assignable to type 'Unit<readonly [number, string]>'.
        Type 'EventCallable<[string]>' is not assignable to type 'Unit<readonly [number, string]>'.
        Type 'EventCallable<AS>' is not assignable to type 'Unit<{ readonly a: number; readonly b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AS' but required in type '{ readonly a: number; readonly b: string; }'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<{ readonly a: number; readonly b: string; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'number' is not assignable to type 'string'.
        Type 'EventCallable<AN>' is not assignable to type 'Unit<{ readonly a: number; readonly b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AN' but required in type '{ readonly a: number; readonly b: string; }'.
        Type 'EventCallable<AS>' is not assignable to type 'Unit<{ readonly a: number; readonly b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AS' but required in type '{ readonly a: number; readonly b: string; }'.
        Type 'EventCallable<AN>' is not assignable to type 'Unit<{ readonly a: number; readonly b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AN' but required in type '{ readonly a: number; readonly b: string; }'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<{ readonly a: number; readonly b: string; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'number' is not assignable to type 'string'.
        Type 'EventCallable<AS>' is not assignable to type 'Unit<{ readonly a: number; readonly b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AS' but required in type '{ readonly a: number; readonly b: string; }'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<{ readonly a: number; readonly b: string; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'number' is not assignable to type 'string'.
        Type 'EventCallable<AS>' is not assignable to type 'Unit<{ readonly a: number; readonly b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AS' but required in type '{ readonly a: number; readonly b: string; }'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<{ readonly a: number; readonly b: string; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'number' is not assignable to type 'string'.
        Type 'EventCallable<AS>' is not assignable to type 'Unit<{ readonly a: number; readonly b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AS' but required in type '{ readonly a: number; readonly b: string; }'.
        Type 'EventCallable<[string]>' is not assignable to type 'Unit<readonly [number, string]>'.
        Type 'EventCallable<[number, number]>' is not assignable to type 'Unit<readonly [number, string]>'.
        Type 'EventCallable<[number]>' is not assignable to type 'Unit<readonly [number, string]>'.
        Type 'EventCallable<[string]>' is not assignable to type 'Unit<readonly [number, string]>'.
        Type 'EventCallable<[number]>' is not assignable to type 'Unit<readonly [number, string]>'.
        Type 'EventCallable<[number, number]>' is not assignable to type 'Unit<readonly [number, string]>'.
        Type 'EventCallable<[string]>' is not assignable to type 'Unit<readonly [number, string]>'.
        Type 'EventCallable<[number, number]>' is not assignable to type 'Unit<readonly [number, string]>'.
        Type 'EventCallable<[string]>' is not assignable to type 'Unit<readonly [number, string]>'.
        Type 'EventCallable<[number, number]>' is not assignable to type 'Unit<readonly [number, string]>'.
        Type 'EventCallable<[number, number]>' is not assignable to type 'Unit<readonly [number, string]>'.
        Type 'EventCallable<[string]>' is not assignable to type 'Unit<readonly [number, string]>'.
        Type 'EventCallable<[string]>' is not assignable to type 'Unit<readonly [number, string]>'.
        Type 'EventCallable<[number, number]>' is not assignable to type 'Unit<readonly [number, string]>'.
        Type 'EventCallable<[number]>' is not assignable to type 'Unit<readonly [number, string]>'.
        Type 'EventCallable<[string]>' is not assignable to type 'Unit<readonly [number, string]>'.
        Type 'EventCallable<[number]>' is not assignable to type 'Unit<readonly [number, string]>'.
        Type 'EventCallable<[number, number]>' is not assignable to type 'Unit<readonly [number, string]>'.
        Type 'EventCallable<[string]>' is not assignable to type 'Unit<readonly [number, string]>'.
        Type 'EventCallable<[number, number]>' is not assignable to type 'Unit<readonly [number, string]>'.
        Type 'EventCallable<[string]>' is not assignable to type 'Unit<readonly [number, string]>'.
        Type 'EventCallable<[number, number]>' is not assignable to type 'Unit<readonly [number, string]>'.
        Type 'EventCallable<[number, number]>' is not assignable to type 'Unit<readonly [number, string]>'.
        Type 'EventCallable<[string]>' is not assignable to type 'Unit<readonly [number, string]>'.
        "
      `)
    })
  })
  describe('source:wide, fn:untyped', () => {
    test('source:wide, fn:untyped (should pass)', () => {
      //prettier-ignore
      {
        sample({source:{a:$num,b:$str}     , target:[a_num]   , fn:({a,b}) => ({a,b})})
        sample({source:{a:$num,b:$str}     , target:[ab]      , fn:({a,b}) => ({a,b})})
        sample({source:{a:$num,b:$str}     , target:[a_num,ab], fn:({a,b}) => ({a,b})})
        sample({source:[$num,$str]         , target:[a_num]   , fn:([a,b]) => ({a,b})})
        sample({source:[$num,$str]         , target:[ab]      , fn:([a,b]) => ({a,b})})
        sample({source:[$num,$str]         , target:[a_num,ab], fn:([a,b]) => ({a,b})})
        sample({source:[$num,$str] as const, target:[a_num]   , fn:([a,b]) => ({a,b})})
        sample({source:[$num,$str] as const, target:[ab]      , fn:([a,b]) => ({a,b})})
        sample({source:[$num,$str] as const, target:[a_num,ab], fn:([a,b]) => ({a,b})})
        sample({source:{a:$num,b:$str}     , clock:num, target:[a_num]   , fn:({a,b}) => ({a,b})})
        sample({source:{a:$num,b:$str}     , clock:num, target:[ab]      , fn:({a,b}) => ({a,b})})
        sample({source:{a:$num,b:$str}     , clock:num, target:[a_num,ab], fn:({a,b}) => ({a,b})})
        sample({source:[$num,$str]         , clock:num, target:[a_num]   , fn:([a,b]) => ({a,b})})
        sample({source:[$num,$str]         , clock:num, target:[ab]      , fn:([a,b]) => ({a,b})})
        sample({source:[$num,$str]         , clock:num, target:[a_num,ab], fn:([a,b]) => ({a,b})})
        sample({source:[$num,$str] as const, clock:num, target:[a_num]   , fn:([a,b]) => ({a,b})})
        sample({source:[$num,$str] as const, clock:num, target:[ab]      , fn:([a,b]) => ({a,b})})
        sample({source:[$num,$str] as const, clock:num, target:[a_num,ab], fn:([a,b]) => ({a,b})})
      }
      expect(typecheck).toMatchInlineSnapshot(`
        "
        no errors
        "
      `)
    })
    test('source:wide, fn:untyped (should fail)', () => {
      //prettier-ignore
      {
        //@ts-expect-error
        sample({source:{a:$num,b:$str}     , target:[a_str]      , fn:({a,b}) => ({a,b})})
        //@ts-expect-error
        sample({source:{a:$num,b:$str}     , target:[abn]        , fn:({a,b}) => ({a,b})})
        //@ts-expect-error
        sample({source:{a:$num,b:$str}     , target:[a_num,a_str], fn:({a,b}) => ({a,b})})
        //@ts-expect-error
        sample({source:{a:$num,b:$str}     , target:[a_num,abn]  , fn:({a,b}) => ({a,b})})
        //@ts-expect-error
        sample({source:{a:$num,b:$str}     , target:[a_str,ab]   , fn:({a,b}) => ({a,b})})
        //@ts-expect-error
        sample({source:{a:$num,b:$str}     , target:[abn,a_str]  , fn:({a,b}) => ({a,b})})
        //@ts-expect-error
        sample({source:{a:$num,b:$str}     , target:[abn,ab]     , fn:({a,b}) => ({a,b})})
        //@ts-expect-error
        sample({source:{a:$num,b:$str}     , target:[ab,a_str]   , fn:({a,b}) => ({a,b})})
        //@ts-expect-error
        sample({source:[$num,$str]         , target:[a_str]      , fn:([a,b]) => ({a,b})})
        //@ts-expect-error
        sample({source:[$num,$str]         , target:[abn]        , fn:([a,b]) => ({a,b})})
        //@ts-expect-error
        sample({source:[$num,$str]         , target:[a_num,a_str], fn:([a,b]) => ({a,b})})
        //@ts-expect-error
        sample({source:[$num,$str]         , target:[a_num,abn]  , fn:([a,b]) => ({a,b})})
        //@ts-expect-error
        sample({source:[$num,$str]         , target:[a_str,ab]   , fn:([a,b]) => ({a,b})})
        //@ts-expect-error
        sample({source:[$num,$str]         , target:[abn,a_str]  , fn:([a,b]) => ({a,b})})
        //@ts-expect-error
        sample({source:[$num,$str]         , target:[abn,ab]     , fn:([a,b]) => ({a,b})})
        //@ts-expect-error
        sample({source:[$num,$str]         , target:[ab,a_str]   , fn:([a,b]) => ({a,b})})
        //@ts-expect-error
        sample({source:[$num,$str] as const, target:[a_str]      , fn:([a,b]) => ({a,b})})
        //@ts-expect-error
        sample({source:[$num,$str] as const, target:[abn]        , fn:([a,b]) => ({a,b})})
        //@ts-expect-error
        sample({source:[$num,$str] as const, target:[a_num,a_str], fn:([a,b]) => ({a,b})})
        //@ts-expect-error
        sample({source:[$num,$str] as const, target:[a_num,abn]  , fn:([a,b]) => ({a,b})})
        //@ts-expect-error
        sample({source:[$num,$str] as const, target:[a_str,ab]   , fn:([a,b]) => ({a,b})})
        //@ts-expect-error
        sample({source:[$num,$str] as const, target:[abn,a_str]  , fn:([a,b]) => ({a,b})})
        //@ts-expect-error
        sample({source:[$num,$str] as const, target:[abn,ab]     , fn:([a,b]) => ({a,b})})
        //@ts-expect-error
        sample({source:[$num,$str] as const, target:[ab,a_str]   , fn:([a,b]) => ({a,b})})
        //@ts-expect-error
        sample({source:{a:$num,b:$str}     , clock:num, target:[a_str]      , fn:({a,b}) => ({a,b})})
        //@ts-expect-error
        sample({source:{a:$num,b:$str}     , clock:num, target:[abn]        , fn:({a,b}) => ({a,b})})
        //@ts-expect-error
        sample({source:{a:$num,b:$str}     , clock:num, target:[a_num,a_str], fn:({a,b}) => ({a,b})})
        //@ts-expect-error
        sample({source:{a:$num,b:$str}     , clock:num, target:[a_num,abn]  , fn:({a,b}) => ({a,b})})
        //@ts-expect-error
        sample({source:{a:$num,b:$str}     , clock:num, target:[a_str,ab]   , fn:({a,b}) => ({a,b})})
        //@ts-expect-error
        sample({source:{a:$num,b:$str}     , clock:num, target:[abn,a_str]  , fn:({a,b}) => ({a,b})})
        //@ts-expect-error
        sample({source:{a:$num,b:$str}     , clock:num, target:[abn,ab]     , fn:({a,b}) => ({a,b})})
        //@ts-expect-error
        sample({source:{a:$num,b:$str}     , clock:num, target:[ab,a_str]   , fn:({a,b}) => ({a,b})})
        //@ts-expect-error
        sample({source:[$num,$str]         , clock:num, target:[a_str]      , fn:([a,b]) => ({a,b})})
        //@ts-expect-error
        sample({source:[$num,$str]         , clock:num, target:[abn]        , fn:([a,b]) => ({a,b})})
        //@ts-expect-error
        sample({source:[$num,$str]         , clock:num, target:[a_num,a_str], fn:([a,b]) => ({a,b})})
        //@ts-expect-error
        sample({source:[$num,$str]         , clock:num, target:[a_num,abn]  , fn:([a,b]) => ({a,b})})
        //@ts-expect-error
        sample({source:[$num,$str]         , clock:num, target:[a_str,ab]   , fn:([a,b]) => ({a,b})})
        //@ts-expect-error
        sample({source:[$num,$str]         , clock:num, target:[abn,a_str]  , fn:([a,b]) => ({a,b})})
        //@ts-expect-error
        sample({source:[$num,$str]         , clock:num, target:[abn,ab]     , fn:([a,b]) => ({a,b})})
        //@ts-expect-error
        sample({source:[$num,$str]         , clock:num, target:[ab,a_str]   , fn:([a,b]) => ({a,b})})
        //@ts-expect-error
        sample({source:[$num,$str] as const, clock:num, target:[a_str]      , fn:([a,b]) => ({a,b})})
        //@ts-expect-error
        sample({source:[$num,$str] as const, clock:num, target:[abn]        , fn:([a,b]) => ({a,b})})
        //@ts-expect-error
        sample({source:[$num,$str] as const, clock:num, target:[a_num,a_str], fn:([a,b]) => ({a,b})})
        //@ts-expect-error
        sample({source:[$num,$str] as const, clock:num, target:[a_num,abn]  , fn:([a,b]) => ({a,b})})
        //@ts-expect-error
        sample({source:[$num,$str] as const, clock:num, target:[a_str,ab]   , fn:([a,b]) => ({a,b})})
        //@ts-expect-error
        sample({source:[$num,$str] as const, clock:num, target:[abn,a_str]  , fn:([a,b]) => ({a,b})})
        //@ts-expect-error
        sample({source:[$num,$str] as const, clock:num, target:[abn,ab]     , fn:([a,b]) => ({a,b})})
        //@ts-expect-error
        sample({source:[$num,$str] as const, clock:num, target:[ab,a_str]   , fn:([a,b]) => ({a,b})})
      }
      expect(typecheck).toMatchInlineSnapshot(`
        "
        Type 'EventCallable<AS>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AS' but required in type '{ a: number; b: string; }'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'number' is not assignable to type 'string'.
        Type 'EventCallable<AN>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AN' but required in type '{ a: number; b: string; }'.
        Type 'EventCallable<AS>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AS' but required in type '{ a: number; b: string; }'.
        Type 'EventCallable<AN>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AN' but required in type '{ a: number; b: string; }'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'number' is not assignable to type 'string'.
        Type 'EventCallable<AS>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AS' but required in type '{ a: number; b: string; }'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'number' is not assignable to type 'string'.
        Type 'EventCallable<AS>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AS' but required in type '{ a: number; b: string; }'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'number' is not assignable to type 'string'.
        Type 'EventCallable<AS>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AS' but required in type '{ a: number; b: string; }'.
        Type 'EventCallable<AS>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AS' but required in type '{ a: number; b: string; }'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'number' is not assignable to type 'string'.
        Type 'EventCallable<AN>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AN' but required in type '{ a: number; b: string; }'.
        Type 'EventCallable<AS>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AS' but required in type '{ a: number; b: string; }'.
        Type 'EventCallable<AN>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AN' but required in type '{ a: number; b: string; }'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'number' is not assignable to type 'string'.
        Type 'EventCallable<AS>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AS' but required in type '{ a: number; b: string; }'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'number' is not assignable to type 'string'.
        Type 'EventCallable<AS>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AS' but required in type '{ a: number; b: string; }'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'number' is not assignable to type 'string'.
        Type 'EventCallable<AS>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AS' but required in type '{ a: number; b: string; }'.
        Type 'EventCallable<AS>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AS' but required in type '{ a: number; b: string; }'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'number' is not assignable to type 'string'.
        Type 'EventCallable<AN>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AN' but required in type '{ a: number; b: string; }'.
        Type 'EventCallable<AS>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AS' but required in type '{ a: number; b: string; }'.
        Type 'EventCallable<AN>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AN' but required in type '{ a: number; b: string; }'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'number' is not assignable to type 'string'.
        Type 'EventCallable<AS>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AS' but required in type '{ a: number; b: string; }'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'number' is not assignable to type 'string'.
        Type 'EventCallable<AS>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AS' but required in type '{ a: number; b: string; }'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'number' is not assignable to type 'string'.
        Type 'EventCallable<AS>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AS' but required in type '{ a: number; b: string; }'.
        Type 'EventCallable<AS>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AS' but required in type '{ a: number; b: string; }'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'number' is not assignable to type 'string'.
        Type 'EventCallable<AN>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AN' but required in type '{ a: number; b: string; }'.
        Type 'EventCallable<AS>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AS' but required in type '{ a: number; b: string; }'.
        Type 'EventCallable<AN>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AN' but required in type '{ a: number; b: string; }'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'number' is not assignable to type 'string'.
        Type 'EventCallable<AS>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AS' but required in type '{ a: number; b: string; }'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'number' is not assignable to type 'string'.
        Type 'EventCallable<AS>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AS' but required in type '{ a: number; b: string; }'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'number' is not assignable to type 'string'.
        Type 'EventCallable<AS>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AS' but required in type '{ a: number; b: string; }'.
        Type 'EventCallable<AS>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AS' but required in type '{ a: number; b: string; }'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'number' is not assignable to type 'string'.
        Type 'EventCallable<AN>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AN' but required in type '{ a: number; b: string; }'.
        Type 'EventCallable<AS>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AS' but required in type '{ a: number; b: string; }'.
        Type 'EventCallable<AN>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AN' but required in type '{ a: number; b: string; }'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'number' is not assignable to type 'string'.
        Type 'EventCallable<AS>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AS' but required in type '{ a: number; b: string; }'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'number' is not assignable to type 'string'.
        Type 'EventCallable<AS>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AS' but required in type '{ a: number; b: string; }'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'number' is not assignable to type 'string'.
        Type 'EventCallable<AS>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AS' but required in type '{ a: number; b: string; }'.
        Type 'EventCallable<AS>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AS' but required in type '{ a: number; b: string; }'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'number' is not assignable to type 'string'.
        Type 'EventCallable<AN>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AN' but required in type '{ a: number; b: string; }'.
        Type 'EventCallable<AS>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AS' but required in type '{ a: number; b: string; }'.
        Type 'EventCallable<AN>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AN' but required in type '{ a: number; b: string; }'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'number' is not assignable to type 'string'.
        Type 'EventCallable<AS>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AS' but required in type '{ a: number; b: string; }'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'number' is not assignable to type 'string'.
        Type 'EventCallable<AS>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AS' but required in type '{ a: number; b: string; }'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'number' is not assignable to type 'string'.
        Type 'EventCallable<AS>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AS' but required in type '{ a: number; b: string; }'.
        "
      `)
    })
  })
  describe('source:same', () => {
    test('source:same (should pass)', () => {
      //prettier-ignore
      {
        sample({source:{a:$num}       , target:[a_num]})
        sample({source:[$num]         , target:[l_num]})
        sample({source:[$num] as const, target:[l_num]})
        sample({source:{a:$num}       , clock:num, target:[a_num]})
        sample({source:[$num]         , clock:num, target:[l_num]})
        sample({source:[$num] as const, clock:num, target:[l_num]})
      }
      expect(typecheck).toMatchInlineSnapshot(`
        "
        no errors
        "
      `)
    })
    test('source:same (should fail)', () => {
      //prettier-ignore
      {
        //@ts-expect-error
        sample({source:{a:$num}       , target:[a_str]              })
        //@ts-expect-error
        sample({source:{a:$num}       , target:[abn]                })
        //@ts-expect-error
        sample({source:{a:$num}       , target:[ab]                 })
        //@ts-expect-error
        sample({source:{a:$num}       , target:[a_num,a_str]        })
        //@ts-expect-error
        sample({source:{a:$num}       , target:[a_num,abn]          })
        //@ts-expect-error
        sample({source:{a:$num}       , target:[a_num,ab]           })
        //@ts-expect-error
        sample({source:{a:$num}       , target:[a_str,ab]           })
        //@ts-expect-error
        sample({source:{a:$num}       , target:[abn,a_str]          })
        //@ts-expect-error
        sample({source:{a:$num}       , target:[abn,ab]             })
        //@ts-expect-error
        sample({source:{a:$num}       , target:[ab,a_str]           })
        //@ts-expect-error
        sample({source:[$num]         , target:[l_str]              })
        //@ts-expect-error
        sample({source:[$num]         , target:[l_num_str]          })
        //@ts-expect-error
        sample({source:[$num]         , target:[l_num_num]          })
        //@ts-expect-error
        sample({source:[$num]         , target:[l_num,l_str]        })
        //@ts-expect-error
        sample({source:[$num]         , target:[l_num,l_num_str]    })
        //@ts-expect-error
        sample({source:[$num]         , target:[l_num,l_num_num]    })
        //@ts-expect-error
        sample({source:[$num]         , target:[l_str,l_num_num]    })
        //@ts-expect-error
        sample({source:[$num]         , target:[l_num_str,l_str]    })
        //@ts-expect-error
        sample({source:[$num]         , target:[l_num_str,l_num_num]})
        //@ts-expect-error
        sample({source:[$num]         , target:[l_num_num,l_str]    })
        //@ts-expect-error
        sample({source:[$num] as const, target:[l_str]              })
        //@ts-expect-error
        sample({source:[$num] as const, target:[l_num_str]          })
        //@ts-expect-error
        sample({source:[$num] as const, target:[l_num_num]          })
        //@ts-expect-error
        sample({source:[$num] as const, target:[l_num,l_str]        })
        //@ts-expect-error
        sample({source:[$num] as const, target:[l_num,l_num_str]    })
        //@ts-expect-error
        sample({source:[$num] as const, target:[l_num,l_num_num]    })
        //@ts-expect-error
        sample({source:[$num] as const, target:[l_str,l_num_num]    })
        //@ts-expect-error
        sample({source:[$num] as const, target:[l_num_str,l_str]    })
        //@ts-expect-error
        sample({source:[$num] as const, target:[l_num_str,l_num_num]})
        //@ts-expect-error
        sample({source:[$num] as const, target:[l_num_num,l_str]    })
        //@ts-expect-error
        sample({source:{a:$num}       , clock:num, target:[a_str]              })
        //@ts-expect-error
        sample({source:{a:$num}       , clock:num, target:[abn]                })
        //@ts-expect-error
        sample({source:{a:$num}       , clock:num, target:[ab]                 })
        //@ts-expect-error
        sample({source:{a:$num}       , clock:num, target:[a_num,a_str]        })
        //@ts-expect-error
        sample({source:{a:$num}       , clock:num, target:[a_num,abn]          })
        //@ts-expect-error
        sample({source:{a:$num}       , clock:num, target:[a_num,ab]           })
        //@ts-expect-error
        sample({source:{a:$num}       , clock:num, target:[a_str,ab]           })
        //@ts-expect-error
        sample({source:{a:$num}       , clock:num, target:[abn,a_str]          })
        //@ts-expect-error
        sample({source:{a:$num}       , clock:num, target:[abn,ab]             })
        //@ts-expect-error
        sample({source:{a:$num}       , clock:num, target:[ab,a_str]           })
        //@ts-expect-error
        sample({source:[$num]         , clock:num, target:[l_str]              })
        //@ts-expect-error
        sample({source:[$num]         , clock:num, target:[l_num_str]          })
        //@ts-expect-error
        sample({source:[$num]         , clock:num, target:[l_num_num]          })
        //@ts-expect-error
        sample({source:[$num]         , clock:num, target:[l_num,l_str]        })
        //@ts-expect-error
        sample({source:[$num]         , clock:num, target:[l_num,l_num_str]    })
        //@ts-expect-error
        sample({source:[$num]         , clock:num, target:[l_num,l_num_num]    })
        //@ts-expect-error
        sample({source:[$num]         , clock:num, target:[l_str,l_num_num]    })
        //@ts-expect-error
        sample({source:[$num]         , clock:num, target:[l_num_str,l_str]    })
        //@ts-expect-error
        sample({source:[$num]         , clock:num, target:[l_num_str,l_num_num]})
        //@ts-expect-error
        sample({source:[$num]         , clock:num, target:[l_num_num,l_str]    })
        //@ts-expect-error
        sample({source:[$num] as const, clock:num, target:[l_str]              })
        //@ts-expect-error
        sample({source:[$num] as const, clock:num, target:[l_num_str]          })
        //@ts-expect-error
        sample({source:[$num] as const, clock:num, target:[l_num_num]          })
        //@ts-expect-error
        sample({source:[$num] as const, clock:num, target:[l_num,l_str]        })
        //@ts-expect-error
        sample({source:[$num] as const, clock:num, target:[l_num,l_num_str]    })
        //@ts-expect-error
        sample({source:[$num] as const, clock:num, target:[l_num,l_num_num]    })
        //@ts-expect-error
        sample({source:[$num] as const, clock:num, target:[l_str,l_num_num]    })
        //@ts-expect-error
        sample({source:[$num] as const, clock:num, target:[l_num_str,l_str]    })
        //@ts-expect-error
        sample({source:[$num] as const, clock:num, target:[l_num_str,l_num_num]})
        //@ts-expect-error
        sample({source:[$num] as const, clock:num, target:[l_num_num,l_str]    })
      }
      expect(typecheck).toMatchInlineSnapshot(`
        "
        Type 'EventCallable<AS>' is not assignable to type 'Unit<{ readonly a: number; }>'.
          The types of '__.a' are incompatible between these types.
            Type 'string' is not assignable to type 'number'.
        Property 'b' is missing in type '{ a: StoreWritable<number>; }' but required in type '{ a: StoreWritable<number>; b: Store<number>; }'.
        Property 'b' is missing in type '{ a: StoreWritable<number>; }' but required in type '{ a: StoreWritable<number>; b: Store<string>; }'.
        Type 'EventCallable<AS>' is not assignable to type 'Unit<{ readonly a: number; }>'.
          The types of '__.a' are incompatible between these types.
            Type 'string' is not assignable to type 'number'.
        Property 'b' is missing in type '{ a: StoreWritable<number>; }' but required in type '{ a: StoreWritable<number>; b: Store<number>; }'.
        Property 'b' is missing in type '{ a: StoreWritable<number>; }' but required in type '{ a: StoreWritable<number>; b: Store<string>; }'.
        Type 'EventCallable<AS>' is not assignable to type 'Unit<{ readonly a: number; }>'.
          The types of '__.a' are incompatible between these types.
            Type 'string' is not assignable to type 'number'.
        Type 'EventCallable<AS>' is not assignable to type 'Unit<{ readonly a: number; }>'.
          The types of '__.a' are incompatible between these types.
            Type 'string' is not assignable to type 'number'.
        Type '{ a: StoreWritable<number>; }' is not assignable to type '{ a: StoreWritable<number>; b: Store<string>; } | { a: StoreWritable<number>; b: Store<number>; }'.
          Property 'b' is missing in type '{ a: StoreWritable<number>; }' but required in type '{ a: StoreWritable<number>; b: Store<number>; }'.
        Type 'EventCallable<AS>' is not assignable to type 'Unit<{ readonly a: number; }>'.
          The types of '__.a' are incompatible between these types.
            Type 'string' is not assignable to type 'number'.
        Type 'EventCallable<[string]>' is not assignable to type 'Unit<readonly [number]>'.
          Types of property '__' are incompatible.
            Type '[string]' is not assignable to type 'readonly [number]'.
              Type 'string' is not assignable to type 'number'.
        Type 'EventCallable<[number, string]>' is not assignable to type 'Unit<readonly [number]>'.
          Types of property '__' are incompatible.
            Type '[number, string]' is not assignable to type 'readonly [number]'.
              Source has 2 element(s) but target allows only 1.
        Type 'EventCallable<[number, number]>' is not assignable to type 'Unit<readonly [number]>'.
          Types of property '__' are incompatible.
            Type '[number, number]' is not assignable to type 'readonly [number]'.
              Source has 2 element(s) but target allows only 1.
        Type 'EventCallable<[string]>' is not assignable to type 'Unit<readonly [number]>'.
        Type 'EventCallable<[number, string]>' is not assignable to type 'Unit<readonly [number]>'.
        Type 'EventCallable<[number, number]>' is not assignable to type 'Unit<readonly [number]>'.
        Type 'EventCallable<[string]>' is not assignable to type 'Unit<readonly [number]>'.
        Type 'EventCallable<[number, number]>' is not assignable to type 'Unit<readonly [number]>'.
        Type 'EventCallable<[number, string]>' is not assignable to type 'Unit<readonly [number]>'.
        Type 'EventCallable<[string]>' is not assignable to type 'Unit<readonly [number]>'.
        Type 'EventCallable<[number, string]>' is not assignable to type 'Unit<readonly [number]>'.
        Type 'EventCallable<[number, number]>' is not assignable to type 'Unit<readonly [number]>'.
        Type 'EventCallable<[number, number]>' is not assignable to type 'Unit<readonly [number]>'.
        Type 'EventCallable<[string]>' is not assignable to type 'Unit<readonly [number]>'.
        Type 'EventCallable<[string]>' is not assignable to type 'Unit<readonly [number]>'.
        Type 'EventCallable<[number, string]>' is not assignable to type 'Unit<readonly [number]>'.
        Type 'EventCallable<[number, number]>' is not assignable to type 'Unit<readonly [number]>'.
        Type 'EventCallable<[string]>' is not assignable to type 'Unit<readonly [number]>'.
        Type 'EventCallable<[number, string]>' is not assignable to type 'Unit<readonly [number]>'.
        Type 'EventCallable<[number, number]>' is not assignable to type 'Unit<readonly [number]>'.
        Type 'EventCallable<[string]>' is not assignable to type 'Unit<readonly [number]>'.
        Type 'EventCallable<[number, number]>' is not assignable to type 'Unit<readonly [number]>'.
        Type 'EventCallable<[number, string]>' is not assignable to type 'Unit<readonly [number]>'.
        Type 'EventCallable<[string]>' is not assignable to type 'Unit<readonly [number]>'.
        Type 'EventCallable<[number, string]>' is not assignable to type 'Unit<readonly [number]>'.
        Type 'EventCallable<[number, number]>' is not assignable to type 'Unit<readonly [number]>'.
        Type 'EventCallable<[number, number]>' is not assignable to type 'Unit<readonly [number]>'.
        Type 'EventCallable<[string]>' is not assignable to type 'Unit<readonly [number]>'.
        Type 'EventCallable<AS>' is not assignable to type 'Unit<{ readonly a: number; }>'.
          The types of '__.a' are incompatible between these types.
            Type 'string' is not assignable to type 'number'.
        Property 'b' is missing in type '{ a: StoreWritable<number>; }' but required in type '{ a: StoreWritable<number>; b: Store<number>; }'.
        Property 'b' is missing in type '{ a: StoreWritable<number>; }' but required in type '{ a: StoreWritable<number>; b: Store<string>; }'.
        Type 'EventCallable<AS>' is not assignable to type 'Unit<{ readonly a: number; }>'.
          The types of '__.a' are incompatible between these types.
            Type 'string' is not assignable to type 'number'.
        Property 'b' is missing in type '{ a: StoreWritable<number>; }' but required in type '{ a: StoreWritable<number>; b: Store<number>; }'.
        Property 'b' is missing in type '{ a: StoreWritable<number>; }' but required in type '{ a: StoreWritable<number>; b: Store<string>; }'.
        Type 'EventCallable<AS>' is not assignable to type 'Unit<{ readonly a: number; }>'.
          The types of '__.a' are incompatible between these types.
            Type 'string' is not assignable to type 'number'.
        Type 'EventCallable<AS>' is not assignable to type 'Unit<{ readonly a: number; }>'.
          The types of '__.a' are incompatible between these types.
            Type 'string' is not assignable to type 'number'.
        Type '{ a: StoreWritable<number>; }' is not assignable to type '{ a: StoreWritable<number>; b: Store<string>; } | { a: StoreWritable<number>; b: Store<number>; }'.
          Property 'b' is missing in type '{ a: StoreWritable<number>; }' but required in type '{ a: StoreWritable<number>; b: Store<number>; }'.
        Type 'EventCallable<AS>' is not assignable to type 'Unit<{ readonly a: number; }>'.
          The types of '__.a' are incompatible between these types.
            Type 'string' is not assignable to type 'number'.
        Type 'EventCallable<[string]>' is not assignable to type 'Unit<readonly [number]>'.
        Type 'EventCallable<[number, string]>' is not assignable to type 'Unit<readonly [number]>'.
        Type 'EventCallable<[number, number]>' is not assignable to type 'Unit<readonly [number]>'.
        Type 'EventCallable<[string]>' is not assignable to type 'Unit<readonly [number]>'.
        Type 'EventCallable<[number, string]>' is not assignable to type 'Unit<readonly [number]>'.
        Type 'EventCallable<[number, number]>' is not assignable to type 'Unit<readonly [number]>'.
        Type 'EventCallable<[string]>' is not assignable to type 'Unit<readonly [number]>'.
        Type 'EventCallable<[number, number]>' is not assignable to type 'Unit<readonly [number]>'.
        Type 'EventCallable<[number, string]>' is not assignable to type 'Unit<readonly [number]>'.
        Type 'EventCallable<[string]>' is not assignable to type 'Unit<readonly [number]>'.
        Type 'EventCallable<[number, string]>' is not assignable to type 'Unit<readonly [number]>'.
        Type 'EventCallable<[number, number]>' is not assignable to type 'Unit<readonly [number]>'.
        Type 'EventCallable<[number, number]>' is not assignable to type 'Unit<readonly [number]>'.
        Type 'EventCallable<[string]>' is not assignable to type 'Unit<readonly [number]>'.
        Type 'EventCallable<[string]>' is not assignable to type 'Unit<readonly [number]>'.
        Type 'EventCallable<[number, string]>' is not assignable to type 'Unit<readonly [number]>'.
        Type 'EventCallable<[number, number]>' is not assignable to type 'Unit<readonly [number]>'.
        Type 'EventCallable<[string]>' is not assignable to type 'Unit<readonly [number]>'.
        Type 'EventCallable<[number, string]>' is not assignable to type 'Unit<readonly [number]>'.
        Type 'EventCallable<[number, number]>' is not assignable to type 'Unit<readonly [number]>'.
        Type 'EventCallable<[string]>' is not assignable to type 'Unit<readonly [number]>'.
        Type 'EventCallable<[number, number]>' is not assignable to type 'Unit<readonly [number]>'.
        Type 'EventCallable<[number, string]>' is not assignable to type 'Unit<readonly [number]>'.
        Type 'EventCallable<[string]>' is not assignable to type 'Unit<readonly [number]>'.
        Type 'EventCallable<[number, string]>' is not assignable to type 'Unit<readonly [number]>'.
        Type 'EventCallable<[number, number]>' is not assignable to type 'Unit<readonly [number]>'.
        Type 'EventCallable<[number, number]>' is not assignable to type 'Unit<readonly [number]>'.
        Type 'EventCallable<[string]>' is not assignable to type 'Unit<readonly [number]>'.
        "
      `)
    })
  })
  describe('source:same, fn:untyped', () => {
    test('source:same, fn:untyped (should pass)', () => {
      //prettier-ignore
      {
        sample({source:{a:$num}       , target:[a_num]   , fn:({a}) => ({a,b:''})})
        sample({source:{a:$num}       , target:[ab]      , fn:({a}) => ({a,b:''})})
        sample({source:{a:$num}       , target:[a_num,ab], fn:({a}) => ({a,b:''})})
        sample({source:[$num]         , target:[a_num]   , fn:([a]) => ({a,b:''})})
        sample({source:[$num]         , target:[ab]      , fn:([a]) => ({a,b:''})})
        sample({source:[$num]         , target:[a_num,ab], fn:([a]) => ({a,b:''})})
        sample({source:[$num] as const, target:[a_num]   , fn:([a]) => ({a,b:''})})
        sample({source:[$num] as const, target:[ab]      , fn:([a]) => ({a,b:''})})
        sample({source:[$num] as const, target:[a_num,ab], fn:([a]) => ({a,b:''})})
        sample({source:{a:$num}       , clock:num, target:[a_num]   , fn:({a}) => ({a,b:''})})
        sample({source:{a:$num}       , clock:num, target:[ab]      , fn:({a}) => ({a,b:''})})
        sample({source:{a:$num}       , clock:num, target:[a_num,ab], fn:({a}) => ({a,b:''})})
        sample({source:[$num]         , clock:num, target:[a_num]   , fn:([a]) => ({a,b:''})})
        sample({source:[$num]         , clock:num, target:[ab]      , fn:([a]) => ({a,b:''})})
        sample({source:[$num]         , clock:num, target:[a_num,ab], fn:([a]) => ({a,b:''})})
        sample({source:[$num] as const, clock:num, target:[a_num]   , fn:([a]) => ({a,b:''})})
        sample({source:[$num] as const, clock:num, target:[ab]      , fn:([a]) => ({a,b:''})})
        sample({source:[$num] as const, clock:num, target:[a_num,ab], fn:([a]) => ({a,b:''})})
      }
      expect(typecheck).toMatchInlineSnapshot(`
        "
        no errors
        "
      `)
    })
    test('source:same, fn:untyped (should fail)', () => {
      //prettier-ignore
      {
        //@ts-expect-error
        sample({source:{a:$num}       , target:[a_str]      , fn:({a}) => ({a,b:''})})
        //@ts-expect-error
        sample({source:{a:$num}       , target:[abn]        , fn:({a}) => ({a,b:''})})
        //@ts-expect-error
        sample({source:{a:$num}       , target:[a_num,a_str], fn:({a}) => ({a,b:''})})
        //@ts-expect-error
        sample({source:{a:$num}       , target:[a_num,abn]  , fn:({a}) => ({a,b:''})})
        //@ts-expect-error
        sample({source:{a:$num}       , target:[a_str,ab]   , fn:({a}) => ({a,b:''})})
        //@ts-expect-error
        sample({source:{a:$num}       , target:[abn,a_str]  , fn:({a}) => ({a,b:''})})
        //@ts-expect-error
        sample({source:{a:$num}       , target:[abn,ab]     , fn:({a}) => ({a,b:''})})
        //@ts-expect-error
        sample({source:{a:$num}       , target:[ab,a_str]   , fn:({a}) => ({a,b:''})})
        //@ts-expect-error
        sample({source:[$num]         , target:[a_str]      , fn:([a]) => ({a,b:''})})
        //@ts-expect-error
        sample({source:[$num]         , target:[abn]        , fn:([a]) => ({a,b:''})})
        //@ts-expect-error
        sample({source:[$num]         , target:[a_num,a_str], fn:([a]) => ({a,b:''})})
        //@ts-expect-error
        sample({source:[$num]         , target:[a_num,abn]  , fn:([a]) => ({a,b:''})})
        //@ts-expect-error
        sample({source:[$num]         , target:[a_str,ab]   , fn:([a]) => ({a,b:''})})
        //@ts-expect-error
        sample({source:[$num]         , target:[abn,a_str]  , fn:([a]) => ({a,b:''})})
        //@ts-expect-error
        sample({source:[$num]         , target:[abn,ab]     , fn:([a]) => ({a,b:''})})
        //@ts-expect-error
        sample({source:[$num]         , target:[ab,a_str]   , fn:([a]) => ({a,b:''})})
        //@ts-expect-error
        sample({source:[$num] as const, target:[a_str]      , fn:([a]) => ({a,b:''})})
        //@ts-expect-error
        sample({source:[$num] as const, target:[abn]        , fn:([a]) => ({a,b:''})})
        //@ts-expect-error
        sample({source:[$num] as const, target:[a_num,a_str], fn:([a]) => ({a,b:''})})
        //@ts-expect-error
        sample({source:[$num] as const, target:[a_num,abn]  , fn:([a]) => ({a,b:''})})
        //@ts-expect-error
        sample({source:[$num] as const, target:[a_str,ab]   , fn:([a]) => ({a,b:''})})
        //@ts-expect-error
        sample({source:[$num] as const, target:[abn,a_str]  , fn:([a]) => ({a,b:''})})
        //@ts-expect-error
        sample({source:[$num] as const, target:[abn,ab]     , fn:([a]) => ({a,b:''})})
        //@ts-expect-error
        sample({source:[$num] as const, target:[ab,a_str]   , fn:([a]) => ({a,b:''})})
        //@ts-expect-error
        sample({source:{a:$num}       , clock:num, target:[a_str]      , fn:({a}) => ({a,b:''})})
        //@ts-expect-error
        sample({source:{a:$num}       , clock:num, target:[abn]        , fn:({a}) => ({a,b:''})})
        //@ts-expect-error
        sample({source:{a:$num}       , clock:num, target:[a_num,a_str], fn:({a}) => ({a,b:''})})
        //@ts-expect-error
        sample({source:{a:$num}       , clock:num, target:[a_num,abn]  , fn:({a}) => ({a,b:''})})
        //@ts-expect-error
        sample({source:{a:$num}       , clock:num, target:[a_str,ab]   , fn:({a}) => ({a,b:''})})
        //@ts-expect-error
        sample({source:{a:$num}       , clock:num, target:[abn,a_str]  , fn:({a}) => ({a,b:''})})
        //@ts-expect-error
        sample({source:{a:$num}       , clock:num, target:[abn,ab]     , fn:({a}) => ({a,b:''})})
        //@ts-expect-error
        sample({source:{a:$num}       , clock:num, target:[ab,a_str]   , fn:({a}) => ({a,b:''})})
        //@ts-expect-error
        sample({source:[$num]         , clock:num, target:[a_str]      , fn:([a]) => ({a,b:''})})
        //@ts-expect-error
        sample({source:[$num]         , clock:num, target:[abn]        , fn:([a]) => ({a,b:''})})
        //@ts-expect-error
        sample({source:[$num]         , clock:num, target:[a_num,a_str], fn:([a]) => ({a,b:''})})
        //@ts-expect-error
        sample({source:[$num]         , clock:num, target:[a_num,abn]  , fn:([a]) => ({a,b:''})})
        //@ts-expect-error
        sample({source:[$num]         , clock:num, target:[a_str,ab]   , fn:([a]) => ({a,b:''})})
        //@ts-expect-error
        sample({source:[$num]         , clock:num, target:[abn,a_str]  , fn:([a]) => ({a,b:''})})
        //@ts-expect-error
        sample({source:[$num]         , clock:num, target:[abn,ab]     , fn:([a]) => ({a,b:''})})
        //@ts-expect-error
        sample({source:[$num]         , clock:num, target:[ab,a_str]   , fn:([a]) => ({a,b:''})})
        //@ts-expect-error
        sample({source:[$num] as const, clock:num, target:[a_str]      , fn:([a]) => ({a,b:''})})
        //@ts-expect-error
        sample({source:[$num] as const, clock:num, target:[abn]        , fn:([a]) => ({a,b:''})})
        //@ts-expect-error
        sample({source:[$num] as const, clock:num, target:[a_num,a_str], fn:([a]) => ({a,b:''})})
        //@ts-expect-error
        sample({source:[$num] as const, clock:num, target:[a_num,abn]  , fn:([a]) => ({a,b:''})})
        //@ts-expect-error
        sample({source:[$num] as const, clock:num, target:[a_str,ab]   , fn:([a]) => ({a,b:''})})
        //@ts-expect-error
        sample({source:[$num] as const, clock:num, target:[abn,a_str]  , fn:([a]) => ({a,b:''})})
        //@ts-expect-error
        sample({source:[$num] as const, clock:num, target:[abn,ab]     , fn:([a]) => ({a,b:''})})
        //@ts-expect-error
        sample({source:[$num] as const, clock:num, target:[ab,a_str]   , fn:([a]) => ({a,b:''})})
      }
      expect(typecheck).toMatchInlineSnapshot(`
        "
        Type 'EventCallable<AS>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AS' but required in type '{ a: number; b: string; }'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'number' is not assignable to type 'string'.
        Type 'EventCallable<AN>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AN' but required in type '{ a: number; b: string; }'.
        Type 'EventCallable<AS>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AS' but required in type '{ a: number; b: string; }'.
        Type 'EventCallable<AN>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AN' but required in type '{ a: number; b: string; }'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'number' is not assignable to type 'string'.
        Type 'EventCallable<AS>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AS' but required in type '{ a: number; b: string; }'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'number' is not assignable to type 'string'.
        Type 'EventCallable<AS>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AS' but required in type '{ a: number; b: string; }'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'number' is not assignable to type 'string'.
        Type 'EventCallable<AS>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AS' but required in type '{ a: number; b: string; }'.
        Type 'EventCallable<AS>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AS' but required in type '{ a: number; b: string; }'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'number' is not assignable to type 'string'.
        Type 'EventCallable<AN>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AN' but required in type '{ a: number; b: string; }'.
        Type 'EventCallable<AS>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AS' but required in type '{ a: number; b: string; }'.
        Type 'EventCallable<AN>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AN' but required in type '{ a: number; b: string; }'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'number' is not assignable to type 'string'.
        Type 'EventCallable<AS>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AS' but required in type '{ a: number; b: string; }'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'number' is not assignable to type 'string'.
        Type 'EventCallable<AS>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AS' but required in type '{ a: number; b: string; }'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'number' is not assignable to type 'string'.
        Type 'EventCallable<AS>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AS' but required in type '{ a: number; b: string; }'.
        Type 'EventCallable<AS>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AS' but required in type '{ a: number; b: string; }'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'number' is not assignable to type 'string'.
        Type 'EventCallable<AN>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AN' but required in type '{ a: number; b: string; }'.
        Type 'EventCallable<AS>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AS' but required in type '{ a: number; b: string; }'.
        Type 'EventCallable<AN>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AN' but required in type '{ a: number; b: string; }'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'number' is not assignable to type 'string'.
        Type 'EventCallable<AS>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AS' but required in type '{ a: number; b: string; }'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'number' is not assignable to type 'string'.
        Type 'EventCallable<AS>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AS' but required in type '{ a: number; b: string; }'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'number' is not assignable to type 'string'.
        Type 'EventCallable<AS>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AS' but required in type '{ a: number; b: string; }'.
        Type 'EventCallable<AS>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AS' but required in type '{ a: number; b: string; }'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'number' is not assignable to type 'string'.
        Type 'EventCallable<AN>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AN' but required in type '{ a: number; b: string; }'.
        Type 'EventCallable<AS>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AS' but required in type '{ a: number; b: string; }'.
        Type 'EventCallable<AN>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AN' but required in type '{ a: number; b: string; }'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'number' is not assignable to type 'string'.
        Type 'EventCallable<AS>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AS' but required in type '{ a: number; b: string; }'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'number' is not assignable to type 'string'.
        Type 'EventCallable<AS>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AS' but required in type '{ a: number; b: string; }'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'number' is not assignable to type 'string'.
        Type 'EventCallable<AS>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AS' but required in type '{ a: number; b: string; }'.
        Type 'EventCallable<AS>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AS' but required in type '{ a: number; b: string; }'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'number' is not assignable to type 'string'.
        Type 'EventCallable<AN>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AN' but required in type '{ a: number; b: string; }'.
        Type 'EventCallable<AS>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AS' but required in type '{ a: number; b: string; }'.
        Type 'EventCallable<AN>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AN' but required in type '{ a: number; b: string; }'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'number' is not assignable to type 'string'.
        Type 'EventCallable<AS>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AS' but required in type '{ a: number; b: string; }'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'number' is not assignable to type 'string'.
        Type 'EventCallable<AS>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AS' but required in type '{ a: number; b: string; }'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'number' is not assignable to type 'string'.
        Type 'EventCallable<AS>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AS' but required in type '{ a: number; b: string; }'.
        Type 'EventCallable<AS>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AS' but required in type '{ a: number; b: string; }'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'number' is not assignable to type 'string'.
        Type 'EventCallable<AN>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AN' but required in type '{ a: number; b: string; }'.
        Type 'EventCallable<AS>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AS' but required in type '{ a: number; b: string; }'.
        Type 'EventCallable<AN>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AN' but required in type '{ a: number; b: string; }'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'number' is not assignable to type 'string'.
        Type 'EventCallable<AS>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AS' but required in type '{ a: number; b: string; }'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'number' is not assignable to type 'string'.
        Type 'EventCallable<AS>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AS' but required in type '{ a: number; b: string; }'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'number' is not assignable to type 'string'.
        Type 'EventCallable<AS>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AS' but required in type '{ a: number; b: string; }'.
        "
      `)
    })
  })
}
